import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Reference } from '../base/Reference';
import { Period } from '../datatypes/Period';
import { Element } from '../base/Element';

export interface PatientContact extends BackboneElement {
  relationship?: CodeableConcept[];
  name?: HumanName;
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  organization?: Reference;
  period?: Period;
  _gender?: Element;
}
