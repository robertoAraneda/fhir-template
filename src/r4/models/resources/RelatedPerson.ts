import { IRelatedPerson } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { IRelatedPersonCommunication } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import { RelatedPersonBuilder } from './RelatedPersonBuilder';
import { RelatedPersonValidator } from './RelatedPersonValidator';

export default class RelatedPerson extends DomainResource implements IRelatedPerson {
  resourceType = 'RelatedPerson' as const;

  // RelatedPerson attributes
  identifier?: IIdentifier[];
  active?: boolean;
  patient?: IReference;
  relationship?: ICodeableConcept[];
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  address?: IAddress[];
  photo?: IAttachment[];
  period?: IPeriod;
  communication?: IRelatedPersonCommunication[];

  _active?: IElement;
  _birthDate?: IElement;
  _gender?: IElement;

  toJson(): RelatedPerson {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `RelatedPerson${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `RelatedPerson${JSON.stringify(this.toJson())}`;
  }

  static builder(): RelatedPersonBuilder {
    return new RelatedPersonBuilder();
  }

  constructor(args: IRelatedPerson) {
    super();
    RelatedPersonValidator(args);
    Object.assign(this, args);
  }
}
