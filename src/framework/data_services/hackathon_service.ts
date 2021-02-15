import { DataService } from './data_service';
import { Hackathon } from '../../core/hackathon';

export class HackathonService implements DataService {
  constructor(private db: any) {}

  async isUnique(name: string): Promise<boolean> {
    const others = await this.db.collection('hackathons').find({ name }).toArray();

    return others.length === 0;
  }

  async store(hackathon: Hackathon): Promise<any> {
    await this.db.collection('hackathons').insertOne(hackathon);
  }
}
