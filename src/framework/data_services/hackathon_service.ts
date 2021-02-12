import { DataService } from './data_service';

export class HackathonService implements DataService {
  constructor(private db: any) {}

  async isUnique(name: string): Promise<boolean> {
    const others = await this.db.collection('hackathons').find({ name }).toArray();

    return others.length === 0;
  }
}
