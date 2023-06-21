import { IRelatedPerson } from '../../interfaces/resources';
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
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import RelatedPersonBuilder from './RelatedPersonBuilder';

export default class RelatedPerson extends DomainResource implements IRelatedPerson {
  _active?: IElement;
  _birthDate?: IElement;
  _gender?: IElement;
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IRelatedPersonCommunication[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  identifier?: IIdentifier[];
  name?: IHumanName[];
  patient?: IReference;
  period?: IPeriod;
  photo?: IAttachment[];
  relationship?: ICodeableConcept[];
  resourceType = 'RelatedPerson';
  telecom?: IContactPoint[];

  static builder(): RelatedPersonBuilder {
    return new RelatedPersonBuilder();
  }

  toJson(): RelatedPerson {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Person${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Person${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IRelatedPerson) {
    super();
    Object.assign(this, args);
  }
}
