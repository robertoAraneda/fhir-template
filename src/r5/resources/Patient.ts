import { ContactPoint } from '../datatypes/ContactPoint';
import { HumanName } from '../datatypes/HumanName';
import { Identifier } from '../datatypes/Identifier';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Reference } from '../datatypes/Reference';
import { Organization } from './Organization';
import { PatientCommunication } from '../datatypes/PatientCommunication';
import { PatientLink } from '../datatypes/PatientLink';
import { PatientContact } from '../datatypes/PatientContact';
import { Attachment } from '../datatypes/Attachment';
import { DomainResource, domainResourceValidArgs } from '../datatypes/DomainResource';
import { resourceValidArgs } from '../datatypes/Resource';
import { Address } from '../datatypes/Address';
import { Practitioner } from './Practitioner';

export class Patient extends DomainResource {
  resourceType = 'Patient';
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  photo?: Attachment[];
  contact?: PatientContact[];
  communication?: PatientCommunication[];
  generalPractitioner?: Reference<Organization | Practitioner | string>[];
  managingOrganization?: Reference<Organization | string>;
  link?: PatientLink[];

  constructor(args?: Partial<Patient>) {
    super();

    const validArgs = [
      ...domainResourceValidArgs,
      ...resourceValidArgs,
      'resourceType',
      'identifier',
      'active',
      'name',
      'telecom',
      'gender',
      'contact',
      'birthDate',
      'address',
      'maritalStatus',
      'multipleBirthBoolean',
      'multipleBirthInteger',
      'communication',
      'photo',
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
