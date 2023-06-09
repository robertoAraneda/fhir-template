import { IRelatedPerson } from '../../interfaces/resources';
import { IElement, INarrative, IReference, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
} from '../../interfaces/datatypes';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export class RelatedPerson implements IRelatedPerson {
  _active?: IElement;
  _birthDate?: IElement;
  _gender?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IRelatedPersonCommunication[];
  contained?: IResource[];
  extension?: IExtension[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  meta?: IMeta;
  modifierExtension?: IExtension[];
  name?: IHumanName[];
  patient?: IReference;
  period?: IPeriod;
  photo?: IAttachment[];
  relationship?: ICodeableConcept[];
  resourceType: string = 'RelatedPerson';
  telecom?: IContactPoint[];
  text?: INarrative;

  constructor(args?: Partial<RelatedPerson>) {
    Object.assign(this, args);
  }
}
