import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';
import * as json from 'koa-json';
import * as cors from '@koa/cors';
import * as logger from 'koa-logger'

const port = process.env.PORT || 3000;

export function prepare() {
  const app: Koa = new Koa();

  const router: Router = new Router();

  app.use(bodyparser());
  app.use(json());
  app.use(cors());
  app.use(router.routes()).use(router.allowedMethods());

  return app;
}

export function start() {
  const app = prepare();
  app.use(logger());
  return app.listen(port, () => "- WebServer running");
}
