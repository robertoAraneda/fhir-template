import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';

export default class PractitionerRoleNotAvailable implements IPractitionerRoleNotAvailable {
  // Element attributes
  id?: string;
  extension?: any[];

  // BackboneElement attributes
  modifierExtension?: any[];

  // PractitionerRoleNotAvailable attributes
  description: string;
  during?: any;
  _description?: any;

  constructor(args?: PractitionerRoleNotAvailable) {
    Object.assign(this, args);
  }
}
