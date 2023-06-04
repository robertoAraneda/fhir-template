import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { Reference } from '../base/Reference';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Address } from '../datatypes/Address';
import { Attachment } from '../datatypes/Attachment';
import { Period } from '../datatypes/Period';
import { RelatedPersonCommunication } from '../backbones/RelatedPersonCommunication';
import { Element } from '../base/Element';

export interface RelatedPerson extends DomainResource {
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  patient?: Reference;
  relationship?: CodeableConcept[];
  telecom?: ContactPoint[];
  gender: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  address?: Address[];
  photo?: Attachment[];
  period?: Period;
  communication?: RelatedPersonCommunication[];
  _active?: Element;
  _gender?: Element;
  _birthDate?: Element;
}
