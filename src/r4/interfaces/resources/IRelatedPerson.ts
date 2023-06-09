import { IDomainResource, IReference, IElement } from '../base';
import { IIdentifier, IHumanName, ICodeableConcept, IContactPoint, IAddress, IAttachment, IPeriod } from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IRelatedPersonCommunication } from '../backbones';

export interface IRelatedPerson extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  name?: IHumanName[];
  patient?: IReference;
  relationship?: ICodeableConcept[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment[];
  period?: IPeriod;
  communication?: IRelatedPersonCommunication[];
  _active?: IElement;
  _gender?: IElement;
  _birthDate?: IElement;
}
