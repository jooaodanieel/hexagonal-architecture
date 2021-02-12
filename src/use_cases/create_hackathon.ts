import { DataService } from '../framework/data_services/data_service';
import { Hackathon } from '../core/hackathon';
import { HackathonCreatedEvent } from '../core/hackathon_created_event';

async function validateHackathonCreation(params: any, hackSvc: DataService) {
  const { name } = params;

  if (!name) {
    return { isValid: false, reason: 'no name provided' };
  }

  const isNameUnique = await hackSvc.isUnique(name);

  if (!isNameUnique) {
    return { isValid: false, reason: 'name already in use' };
  }

  return { isValid: true };
}

export async function createHackathon(params: any, hackSvc: DataService): Promise<HackathonCreatedEvent> {
  const { isValid, reason } = await validateHackathonCreation(params, hackSvc);

  if (!isValid) {
    throw new Error(reason);
  }

  const { name } = params;
  const hackathon = new Hackathon(name);
  return new HackathonCreatedEvent(hackathon);
}
