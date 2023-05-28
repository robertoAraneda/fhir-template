import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { HumanName } from './HumanName';
import { ContactPoint } from './ContactPoint';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';
import { Period } from './Period';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';

export class PatientContact extends BackboneElement {
  relationship?: CodeableConcept[];
  name?: HumanName;
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  organization?: Reference<Organization | string>;
  period?: Period;

  constructor(args?: PatientContact) {
    super();
    const validArgs = ['relationship', 'name', 'telecom', 'gender', 'organization', 'period'];

    for (const key in args) {
      if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type PatientContact`);
    }
    Object.assign(this, args);
  }
}
