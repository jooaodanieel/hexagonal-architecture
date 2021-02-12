// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as logger from 'koa-logger';

import * as DB from './framework/database';
import * as WebApp from './framework/web_app';
import * as Broker from './framework/message_broker';

async function bootstrap() {
  const db = await DB.connect();

  const broker = await Broker.connect();

  WebApp.start(db, broker);
}

bootstrap().catch(console.dir);
