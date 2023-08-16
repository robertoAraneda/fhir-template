import { IPerson } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { IPersonLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../../enums';
import { AdministrativeGenderType } from '../../../types';
import DomainResource from '../base/DomainResource';
import { PersonBuilder } from './PersonBuilder';
import { PersonValidator } from './PersonValidator';

export default class Person extends DomainResource implements IPerson {
  resourceType = 'Person' as const;

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
  _active?: IElement;

  toJson(): Person {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Person${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Person${JSON.stringify(this.toJson())}`;
  }
  static builder(): PersonBuilder {
    return new PersonBuilder();
  }

  constructor(args: IPerson) {
    super();
    PersonValidator(args);
    Object.assign(this, args);
  }
}
