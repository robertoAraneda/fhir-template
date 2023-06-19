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
import { IRelatedPersonBuilder, RelatedPersonBuilder } from './RelatedPersonBuilder';

export default class RelatedPerson extends DomainResource implements IRelatedPerson {
  resourceType = 'RelatedPerson';

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

  static get resourceType(): string {
    return 'RelatedPerson';
  }

  static builder(): IRelatedPersonBuilder {
    return new RelatedPersonBuilder();
  }

  constructor(args?: RelatedPerson) {
    super();
    Object.assign(this, args);
  }
}
