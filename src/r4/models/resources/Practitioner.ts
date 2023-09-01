import { IPractitioner } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
} from '../../interfaces/datatypes';
import { IPractitionerQualification } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import { PractitionerBuilder } from './PractitionerBuilder';
import { PractitionerValidator } from './PractitionerValidator';

export default class Practitioner extends DomainResource implements IPractitioner {
  resourceType = 'Practitioner' as const;

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

  toJson(): Practitioner {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Practitioner${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Practitioner${JSON.stringify(this.toJson())}`;
  }

  static builder(): PractitionerBuilder {
    return new PractitionerBuilder();
  }

  constructor(args: IPractitioner) {
    super();
    PractitionerValidator(args);
    Object.assign(this, args);
  }
}
