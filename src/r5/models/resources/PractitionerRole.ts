import { IPractitionerRole } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAvailability,
  ICodeableConcept,
  IExtendedContactDetail,
  IIdentifier,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import DomainResource from '../base/DomainResource';
import PractitionerRoleBuilder from './PractitionerRoleBuilder';

export default class PractitionerRole extends DomainResource implements IPractitionerRole {
  _active?: IElement;
  active?: boolean;
  availability?: IAvailability[];
  characteristic?: ICodeableConcept[];
  code?: ICodeableConcept[];
  communication?: ICodeableConcept[];
  contact?: IExtendedContactDetail[];
  endpoint?: IReference[];
  healthcareService?: IReference[];
  identifier?: IIdentifier[];
  location?: IReference[];
  organization?: IReference;
  period?: IPeriod;
  practitioner?: IReference;
  resourceType = 'PractitionerRole' as const;
  specialty?: ICodeableConcept[];

  static builder(): PractitionerRoleBuilder {
    return new PractitionerRoleBuilder();
  }

  toJson(): PractitionerRole {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Person${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Person${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: Partial<PractitionerRole>) {
    super();
    Object.assign(this, args);
  }
}
