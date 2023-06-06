import { IPractitioner } from '../../interfaces/resources';
import { IElement, INarrative, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
} from '../../interfaces/datatypes';
import { IPractitionerCommunication, IPractitionerQualification } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export class Practitioner implements IPractitioner {
  _active?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IPractitionerCommunication[];
  contained?: IResource[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  extension?: IExtension[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  meta?: IMeta;
  modifierExtension?: IExtension[];
  name?: IHumanName[];
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  resourceType: string = 'Practitioner';
  telecom?: IContactPoint[];
  text?: INarrative;

  constructor(args?: Partial<Practitioner>) {
    Object.assign(this, args);
  }
}
