import { IDomainResource, IElement } from '../base';
import {
  IIdentifier,
  IHumanName,
  IContactPoint,
  IAddress,
  ICodeableConcept,
  IAttachment,
  IReference,
} from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPersonCommunication, IPersonLink } from '../backbones';

export interface IPerson extends IDomainResource {
  resourceType: 'Person';
  identifier?: IIdentifier[];
  active?: boolean;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: IAddress[];
  maritalStatus?: ICodeableConcept;
  photo?: IAttachment[];
  communication?: IPersonCommunication[];
  managingOrganization?: IReference;
  link?: IPersonLink[];
  _active?: IElement;
  _gender?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
}
