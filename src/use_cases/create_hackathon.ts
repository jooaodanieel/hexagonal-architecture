import { DataService } from '../framework/data_services/data_service';
import { Hackathon } from '../core/hackathon';
import { HackathonCreatedEvent } from '../core/hackathon_created_event';

interface ValidationResult {
  isValid: boolean;
  reason?: string;
}

export class CreateHackathon {
  private static async validate(params: any, hackSvc: DataService): Promise<ValidationResult> {
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

  static async run(params: any, hackSvc: DataService): Promise<HackathonCreatedEvent> {
    const { isValid, reason } = await CreateHackathon.validate(params, hackSvc);

    if (!isValid) {
      throw new Error(reason);
    }

    const { name } = params;
    const hackathon = new Hackathon(name);
    return new HackathonCreatedEvent(hackathon);
  }
}
