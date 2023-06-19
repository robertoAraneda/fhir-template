import { IPerson } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import { IAddress, IAttachment, IContactPoint, IHumanName, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IPersonLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import { IPersonBuilder, PersonBuilder } from './PersonBuilder';

export default class Person extends DomainResource implements IPerson {
  resourceType = 'Person';

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

  static get resourceType(): string {
    return 'Person';
  }

  static builder(): IPersonBuilder {
    return new PersonBuilder();
  }

  constructor(args?: Person) {
    super();
    Object.assign(this, args);
  }
}
