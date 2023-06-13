import { IPerson } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  INarrative,
  IReference,
} from '../../interfaces/datatypes';
import { IPersonLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export default class Person implements IPerson {
  resourceType = 'Person';

  // Resource attributes
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  language?: string;
  _implicitRules?: IElement;
  _language?: IElement;

  // DomainResource attributes
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];

  // Person attributes
  identifier?: IIdentifier[];
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment;
  managingOrganization?: IReference;
  active?: boolean;
  link?: IPersonLink[];

  // Extensions
  _birthDate?: IElement;
  _gender?: IElement;

  constructor(args?: Person) {
    Object.assign(this, args);
  }
}
