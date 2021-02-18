import { DataService } from '../framework/data_services/data_service';
import { Hackathon } from '../core/hackathon';

export class HackathonCreated {
  static async run(params: any, hackSvc: DataService): Promise<void> {
    const hackathon = new Hackathon(params.name, params.id);

    await hackSvc.store(hackathon);
  }
}
