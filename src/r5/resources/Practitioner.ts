import { DomainResource, domainResourceValidArgs } from '../datatypes/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { Address } from '../datatypes/Address';
import { Attachment } from '../datatypes/Attachment';
import { PractitionerQualification } from '../datatypes/PractitionerQualification';
import { PractitionerCommunication } from '../datatypes/PractitionerCommunication';
import { resourceValidArgs } from '../datatypes/Resource';

export class Practitioner extends DomainResource {
  resourceType = 'Practitioner';
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: Address[];
  photo?: Attachment[];
  qualification?: PractitionerQualification[];
  communication?: PractitionerCommunication[];

  constructor(args?: Partial<Practitioner>) {
    super();
    Object.assign(this, args);

    if (args) {
      const validArgs = [
        ...domainResourceValidArgs,
        ...resourceValidArgs,
        'resourceType',
        'identifier',
        'active',
        'name',
        'telecom',
        'gender',
        'birthDate',
        'deceasedBoolean',
        'deceasedDateTime',
        'address',
        'photo',
        'qualification',
        'communication',
      ];

      Object.keys(args).forEach((key) => {
        if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type Practitioner`);
      });
    }
  }
}
