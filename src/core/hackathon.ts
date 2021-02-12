export class Hackathon {
  private static count = 0;

  public readonly id: number;

  constructor(public name: string) {
    this.id = ++Hackathon.count;
  }
}
