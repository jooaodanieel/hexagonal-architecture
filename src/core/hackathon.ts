export class Hackathon {
  private static count = 0;

  constructor(public name: string, public readonly id: number = ++Hackathon.count) {}
}
