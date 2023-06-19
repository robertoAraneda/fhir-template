import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import {
  IPractitionerRoleNotAvailableBuilder,
  PractitionerRoleNotAvailableBuilder,
} from './PractitionerRoleNotAvailableBuilder';

export default class PractitionerRoleNotAvailable extends BackboneElement implements IPractitionerRoleNotAvailable {
  // PractitionerRoleNotAvailable attributes
  description: string;
  during?: any;
  _description?: any;

  static builder(): IPractitionerRoleNotAvailableBuilder {
    return new PractitionerRoleNotAvailableBuilder();
  }

  constructor(args?: PractitionerRoleNotAvailable) {
    super();
    Object.assign(this, args);
  }
}
