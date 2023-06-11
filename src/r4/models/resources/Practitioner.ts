import { IPractitioner } from '../../interfaces/resources';
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
} from '../../interfaces/datatypes';
import { IPractitionerQualification } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export class Practitioner implements IPractitioner {
  resourceType = 'Practitioner';

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

  // Practitioner attributes
  identifier?: IIdentifier[];
  active?: boolean;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  address?: IAddress[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  communication?: ICodeableConcept[];

  _active?: IElement;
  _birthDate?: IElement;
  _gender?: IElement;

  constructor(args?: Practitioner) {
    Object.assign(this, args);
  }
}
