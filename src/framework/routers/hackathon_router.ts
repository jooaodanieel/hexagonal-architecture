import { Context } from 'koa';
import * as Router from 'koa-router';

import { CreateHackathon } from '../../use_cases/create_hackathon';
import { HackathonService } from '../data_services/hackathon_service';

export const hackathonRouter: Router = new Router();

hackathonRouter.post(
  '/hackathons',
  async (ctx: Context): Promise<void> => {
    try {
      const ds = new HackathonService(ctx.db);
      const newHackEvt = await CreateHackathon.run(ctx.request.body, ds);
      ctx.broker.publish(newHackEvt);
      ctx.body = { hackathon: newHackEvt.hackathon };
    } catch (e) {
      ctx.body = { error: e.message };
      ctx.status = 403;
    }
  },
);
