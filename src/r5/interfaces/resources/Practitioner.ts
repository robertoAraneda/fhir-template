import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Address } from '../datatypes/Address';
import { Attachment } from '../datatypes/Attachment';
import { Element } from '../base/Element';
import { PractitionerCommunication } from '../backbones/PractitionerCommunication';
import { PractitionerQualification } from '../backbones/PractitionerQualification';

export interface Practitioner extends DomainResource {
  identifier?: Identifier[];
  active?: boolean;
  _active?: Element;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  _birthDate?: Element;
  deceasedBoolean?: boolean;
  _deceasedBoolean?: Element;
  deceasedDateTime?: string;
  _deceasedDateTime?: Element;
  address?: Address[];
  photo?: Attachment[];
  qualification?: PractitionerQualification[];
  communication?: PractitionerCommunication[];
}
