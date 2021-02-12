export abstract class Event {
  constructor(public channel: string, public type: string, protected payload: any) {}

  public toJSON(): string {
    return JSON.stringify({
      type: this.type,
      payload: this.payload,
    });
  }
}
