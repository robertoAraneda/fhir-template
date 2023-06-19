import { IPractitionerRole } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IPractitionerRoleAvailableTime, IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import DomainResource from '../base/DomainResource';
import { IPractitionerRoleBuilder, PractitionerRoleBuilder } from './PractitionerRoleBuilder';

/**
 * @summary FHIR R4
 */
export default class PractitionerRole extends DomainResource implements IPractitionerRole {
  resourceType = 'PractitionerRole';

  // PractitionerRole attributes
  identifier?: IIdentifier[];
  active?: boolean;
  period?: IPeriod;
  practitioner?: IReference;
  organization?: IReference;
  code?: ICodeableConcept[];
  specialty?: ICodeableConcept[];
  location?: IReference[];
  healthcareService?: IReference[];
  telecom?: IReference[];
  availableTime?: IPractitionerRoleAvailableTime[];
  notAvailable?: IPractitionerRoleNotAvailable[];
  availabilityExceptions?: string;
  endpoint?: IReference[];

  // Extensions
  _active?: IElement;
  _availabilityExceptions?: IElement;

  static get resourceType(): string {
    return 'PractitionerRole';
  }

  static builder(): IPractitionerRoleBuilder {
    return new PractitionerRoleBuilder();
  }

  constructor(args?: PractitionerRole) {
    super();
    Object.assign(this, args);
  }
}
