import { IDomainResource, IElement, IReference } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, ICodeableConcept, IAttachment } from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPersonCommunication, IPersonLink } from '../backbones';

export interface IPerson extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  address?: IAddress[];
  maritalStatus?: ICodeableConcept;
  photo?: IAttachment[];
  communication?: IPersonCommunication[];
  managingOrganization?: IReference;
  link?: IPersonLink[];
  _active?: IElement;
  _gender?: IElement;
  _birthDate?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
}
