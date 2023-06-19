import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { PractitionerRoleNotAvailableBuilder } from './PractitionerRoleNotAvailableBuilder';

export default class PractitionerRoleNotAvailable extends BackboneElement implements IPractitionerRoleNotAvailable {
  // PractitionerRoleNotAvailable attributes
  description: string;
  during?: any;
  _description?: any;

  toJson(): PractitionerRoleNotAvailable {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PractitionerRoleNotAvailable${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PractitionerRoleNotAvailable${JSON.stringify(this.toJson())}`;
  }

  static builder(): PractitionerRoleNotAvailableBuilder {
    return new PractitionerRoleNotAvailableBuilder();
  }

  constructor(args?: IPractitionerRoleNotAvailable) {
    super();
    Object.assign(this, args);
  }
}
