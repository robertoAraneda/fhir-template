import { DomainResource, domainResourceValidArgs } from '../datatypes/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Attachment } from '../datatypes/Attachment';
import { Reference } from '../datatypes/Reference';
import { Organization } from './Organization';
import { PersonCommunication } from '../backbones/PersonCommunication';
import { PersonLink } from '../backbones/PersonLink';
import { resourceValidArgs } from '../datatypes/Resource';
import { Address } from '../datatypes/Address';

export class Person extends DomainResource {
  resourceType = 'Person';
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  photo?: Attachment[];
  communication?: PersonCommunication[];
  managingOrganization?: Reference<Organization | string>;
  link?: PersonLink[];

  constructor(args?: Partial<Person>) {
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
      'managingOrganization',
      'link',
    ];

    if (args) {
      for (const key of Object.keys(args)) {
        if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type Person`);
      }
      Object.assign(this, args);
    }
  }
}
