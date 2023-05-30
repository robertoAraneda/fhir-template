import { DomainResource, domainResourceValidArgs } from '../datatypes/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../types/AdministrativeGenderType';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Attachment } from '../datatypes/Attachment';
import { PersonCommunication } from '../backbones/PersonCommunication';
import { Reference } from '../datatypes/Reference';
import { Patient } from './Patient';
import { Period } from '../datatypes/Period';
import { resourceValidArgs } from '../datatypes/Resource';
import { Address } from '../datatypes/Address';
import { validateRelatedPerson } from '../validators/ValidateRelatedPerson';
import { RelatedPersonCommunication } from '../backbones/RelatedPersonCommunication';

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
  communication?: RelatedPersonCommunication[];

  constructor(args?: Partial<RelatedPerson>) {
    super();
    Object.assign(this, args);

    if (args) {
      validateRelatedPerson(args);
    }
  }
}
