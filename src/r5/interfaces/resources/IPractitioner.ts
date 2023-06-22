import { IDomainResource, IElement } from '../base';
import { IIdentifier, IHumanName, IContactPoint, IAddress, IAttachment } from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPractitionerCommunication, IPractitionerQualification } from '../backbones';

export interface IPractitioner extends IDomainResource {
  resourceType: 'Practitioner';
  identifier?: IIdentifier[];
  active?: boolean;
  _active?: IElement;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  _birthDate?: IElement;
  deceasedBoolean?: boolean;
  _deceasedBoolean?: IElement;
  deceasedDateTime?: string;
  _deceasedDateTime?: IElement;
  address?: IAddress[];
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  communication?: IPractitionerCommunication[];
}
