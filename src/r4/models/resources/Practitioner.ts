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
import { IPractitionerBuilder, PractitionerBuilder } from './PractitionerBuilder';

export default class Practitioner extends DomainResource implements IPractitioner {
  resourceType = 'Practitioner';

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

  static get resourceType(): string {
    return 'Practitioner';
  }

  static builder(): IPractitionerBuilder {
    return new PractitionerBuilder();
  }

  constructor(args?: Practitioner) {
    super();
    Object.assign(this, args);
  }
}
