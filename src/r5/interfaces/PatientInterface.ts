import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGenderVS } from '../valuesets/AdministrativeGenderVS';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { BackboneElement } from '../datatypes/BackboneElement';
import { LinkPatient } from './LinkPatient';

export interface PatientInterface {
  id?: number;
  identifiers?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  maritalStatus?: CodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  managingOrganization?: Reference<Organization>;
  link?: BackboneElement<LinkPatient>[];
}
