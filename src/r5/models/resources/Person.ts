import { IPerson } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { IPersonCommunication, IPersonLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import PersonBuilder from './PersonBuilder';
import DomainResource from '../base/DomainResource';

export default class Person extends DomainResource implements IPerson {
  _active?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IPersonCommunication[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  identifier?: IIdentifier[];
  link?: IPersonLink[];
  managingOrganization?: IReference;
  maritalStatus?: ICodeableConcept;
  name?: IHumanName[];
  photo?: IAttachment[];
  resourceType = 'Person' as const;
  telecom?: IContactPoint[];

  static builder(): PersonBuilder {
    return new PersonBuilder();
  }

  toJson(): Person {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Person${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Person${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IPerson) {
    super();
    Object.assign(this, args);
  }
}
