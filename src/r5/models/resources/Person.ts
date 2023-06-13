import { IPerson } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  INarrative,
  IReference,
} from '../../interfaces/datatypes';
import { IPersonCommunication, IPersonLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export default class Person implements IPerson {
  _active?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IPersonCommunication[];
  contained?: IResource[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  extension?: IExtension[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  link?: IPersonLink[];
  managingOrganization?: IReference;
  maritalStatus?: ICodeableConcept;
  meta?: IMeta;
  modifierExtension?: IExtension[];
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  name?: IHumanName[];
  photo?: IAttachment[];
  resourceType: string = 'Person';
  telecom?: IContactPoint[];
  text?: INarrative;

  constructor(args?: Partial<Person>) {
    Object.assign(this, args);
  }
}
