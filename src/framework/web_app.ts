import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';
import * as json from 'koa-json';
import * as cors from '@koa/cors';
import * as logger from 'koa-logger';

import { createHackathon } from '../use_cases/create_hackathon';
import { HackathonService } from './data_services/hackathon_service';

const port = process.env.PORT || 3000;

export function prepare(db: any, broker: any) {
  const app: Koa = new Koa();

  const router: Router = new Router();

  router.post(
    '/hackathons',
    async (ctx: Koa.Context): Promise<void> => {
      try {
        const ds = new HackathonService(ctx.db);
        const newHackEvt = await createHackathon(ctx.request.body, ds);
        ctx.broker.publish(newHackEvt);
        ctx.body = { hackathon: newHackEvt.hackathon };
      } catch (e) {
        ctx.body = { error: e.message };
        ctx.status = 403;
      }
    },
  );

  app.use(bodyparser());
  app.use(json());
  app.use(router.routes()).use(router.allowedMethods());

  app.context.db = db;
  app.context.broker = broker;

  return app;
}

export function start(db: any, broker: any) {
  const app = prepare(db, broker);
  app.use(cors());
  app.use(logger());
  return app.listen(port, () => console.log('- WebServer running'));
}
