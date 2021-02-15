import { DataService } from '../framework/data_services/data_service';
import { Hackathon } from '../core/hackathon';

export async function hackathonCreated(params: any, hackSvc: DataService): Promise<void> {
  const hackathon = new Hackathon(params.name, params.id);

  await hackSvc.store(hackathon);
}
