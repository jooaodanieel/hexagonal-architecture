import * as STAN from 'node-nats-streaming';

import { Event } from '../core/event';

import { hackathonCreatedListener } from './listeners/hackathon_created';

const clusterID = process.env.CLUSTER_ID || 'test-cluster';
const clusterClientID = process.env.CLUSTER_CLIENT_ID || 'test';
const clusterURL = process.env.CLUSTER_URL || 'nats://localhost:4222';

export const connect = (db: any): Promise<any> => {
  const stan = STAN.connect(clusterID, clusterClientID, {
    url: clusterURL,
  });

  const broker = {
    publish: (event: Event): void => {
      stan.publish(event.channel, event.toJSON());
    },
  };

  return new Promise((res) =>
    stan.on('connect', () => {
      console.log('- Broker connected');

      hackathonCreatedListener(stan, db);

      res(broker);
    }),
  );
};
