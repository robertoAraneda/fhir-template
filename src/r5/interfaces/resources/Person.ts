import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Address } from '../datatypes/Address';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Attachment } from '../datatypes/Attachment';
import { Reference } from '../base/Reference';
import { PersonCommunication } from '../backbones/PersonCommunication';
import { PersonLink } from '../backbones/PersonLink';
import { Element } from '../base/Element';

export interface Person extends DomainResource {
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  photo?: Attachment[];
  communication?: PersonCommunication[];
  managingOrganization?: Reference;
  link?: PersonLink[];
  _active?: Element;
  _gender?: Element;
  _birthDate?: Element;
  _multipleBirthBoolean?: Element;
  _multipleBirthInteger?: Element;
  _deceasedBoolean?: Element;
  _deceasedDateTime?: Element;
}
