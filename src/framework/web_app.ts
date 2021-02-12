import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as json from 'koa-json';
import * as cors from '@koa/cors';
import * as logger from 'koa-logger';

import { hackathonRouter } from './routers/hackathon_router';

const port = process.env.PORT || 3000;

export function prepare(db: any, broker: any) {
  const app: Koa = new Koa();

  app.use(bodyparser());
  app.use(json());

  app.use(hackathonRouter.routes()).use(hackathonRouter.allowedMethods());

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
