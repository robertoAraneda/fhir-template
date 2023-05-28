import { Resource } from './Resource';
import { ContactPoint } from '../datatypes/ContactPoint';
import { HumanName } from '../datatypes/HumanName';
import { Identifier } from '../datatypes/Identifier';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { BackboneElement } from '../datatypes/BackboneElement';
import { Reference } from '../datatypes/Reference';
import { Organization } from './Organization';
import { PatientCommunication } from '../datatypes/PatientCommunication';
import { PatientLink } from '../datatypes/PatientLink';

export class Patient extends Resource {
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  maritalStatus?: CodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  communication?: PatientCommunication[];
  generalPractitioner?: Reference<Organization>[];
  managingOrganization?: Reference<Organization | string>;
  link?: PatientLink[];

  constructor(args?: Patient) {
    super('Patient');

    const validArgs = [
      'id',
      'resourceType',
      'identifier',
      'active',
      'name',
      'telecom',
      'gender',
      'birthDate',
      'maritalStatus',
      'multipleBirthBoolean',
      'multipleBirthInteger',
      'communication',
      'generalPractitioner',
      'managingOrganization',
      'link',
    ];

    if (args) {
      for (const key of Object.keys(args)) {
        if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type Patient`);
      }
      Object.assign(this, args);
    }
  }
}
