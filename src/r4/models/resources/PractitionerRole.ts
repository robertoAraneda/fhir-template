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
  resourceType = 'PractitionerRole' as const;

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

  toJson(): PractitionerRole {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PractitionerRole${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PractitionerRole${JSON.stringify(this.toJson())}`;
  }

  static builder(): PractitionerRoleBuilder {
    return new PractitionerRoleBuilder();
  }

  constructor(args?: IPractitionerRole) {
    super();
    Object.assign(this, args);
  }
}
