import * as STAN from 'node-nats-streaming';

const clusterID = process.env.CLUSTER_ID || 'test-cluster';
const clusterClientID = process.env.CLUSTER_CLIENT_ID || 'test';
const clusterURL = process.env.CLUSTER_URL || 'nats://localhost:4222';

export const connect = (): Promise<void> => {
  const broker = STAN.connect(clusterID, clusterClientID, {
    url: clusterURL,
  });

  return new Promise((res) =>
    broker.on('connect', () => {
      console.log('- Broker connected');
      res();
    }),
  );
};
