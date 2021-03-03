import { Context } from 'koa';
import * as Router from 'koa-router';

import { collectDefaultMetrics, register } from 'prom-client';

export const metricsRouter: Router = new Router();

collectDefaultMetrics({
  gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
});

metricsRouter.get(
  '/metrics',
  async (ctx: Context): Promise<void> => {
    ctx.response.type = register.contentType;
    ctx.body = await register.metrics();
  },
);
