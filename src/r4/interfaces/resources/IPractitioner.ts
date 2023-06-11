import { IDomainResource, IElement } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, IAttachment } from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPractitionerQualification } from '../backbones';
import { CodeableConcept } from '../../models/datatypes/CodeableConcept';

export interface IPractitioner extends IDomainResource {
  identifier?: IIdentifier[];
  active?: boolean;
  _active?: IElement;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  _gender?: IElement;
  birthDate?: string;
  _birthDate?: IElement;
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  communication?: CodeableConcept[];
}
