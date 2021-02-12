import { Event } from './event';
import { Hackathon } from './hackathon';

export class HackathonCreatedEvent extends Event {
  public static readonly type = 'HACKATHON_CREATED';
  public static readonly channel = 'hackathons';

  constructor(payload: Hackathon) {
    super(HackathonCreatedEvent.channel, HackathonCreatedEvent.type, payload);
  }

  public get hackathon(): Hackathon {
    return this.payload;
  }
}
