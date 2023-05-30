import { BackboneElement } from '../datatypes/BackboneElement';
import { Reference } from '../datatypes/Reference';
import { Patient } from '../resources/Patient';
import { Person } from '../resources/Person';
import { IdentityAssuranceLevel } from '../enums/IdentityAssuranceLevel';
import { IdentityAssuranceLevelType } from '../types/IdentityAssuranceLevelType';

export class PersonLink extends BackboneElement {
  target: Reference<Patient | Person | string>;
  assurance?: IdentityAssuranceLevel | IdentityAssuranceLevelType;
  constructor(args?: Partial<PersonLink>) {
    super();
    Object.assign(this, args);
  }
}
