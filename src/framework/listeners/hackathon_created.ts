import { HackathonCreatedEvent } from '../../core/hackathon_created_event';
import { Message } from 'node-nats-streaming';
import { HackathonCreated } from '../../use_cases/hackathon_created';
import { HackathonService } from '../data_services/hackathon_service';

export function hackathonCreatedListener(stan: any, db: any): void {
  const replayAllOpts = stan.subscriptionOptions().setDeliverAllAvailable();

  const subs = stan.subscribe(HackathonCreatedEvent.channel, replayAllOpts);

  subs.on(
    'message',
    async (msg: Message): Promise<void> => {
      const { payload } = JSON.parse(msg.getData() as string);

      const hackSvc = new HackathonService(db);

      await HackathonCreated.run(payload, hackSvc);
    },
  );
}
