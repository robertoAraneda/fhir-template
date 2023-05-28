import { DomainResource, domainResourceValidArgs } from '../datatypes/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enumerators/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Attachment } from '../datatypes/Attachment';
import { PersonCommunication } from '../datatypes/PersonCommunication';
import { Reference } from '../datatypes/Reference';
import { Patient } from './Patient';
import { Period } from '../datatypes/Period';
import { resourceValidArgs } from '../datatypes/Resource';
import { Address } from '../datatypes/Address';

export class RelatedPerson extends DomainResource {
  resourceType = 'RelatedPerson';
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  patient?: Reference<string | Patient>;
  relationship?: CodeableConcept[];
  telecom?: ContactPoint[];
  gender: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  address?: Address[];
  photo?: Attachment[];
  period?: Period;
  communication?: PersonCommunication[];

  constructor(args?: Partial<RelatedPerson>) {
    super();

    const validArgs = [
      ...domainResourceValidArgs,
      ...resourceValidArgs,
      'resourceType',
      'identifier',
      'active',
      'patient',
      'relationship',
      'name',
      'telecom',
      'gender',
      'birthDate',
      'address',
      'photo',
      'period',
      'communication',
    ];

    if (args) {
      for (const key of Object.keys(args)) {
        if (!validArgs.includes(key)) throw new Error(`Key ${key} is not valid for type RelatedPerson`);
      }
      Object.assign(this, args);
    }
  }
}
