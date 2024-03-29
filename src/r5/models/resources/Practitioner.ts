import { IPractitioner } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import { IAddress, IAttachment, IContactPoint, IHumanName, IIdentifier } from '../../interfaces/datatypes';
import { IPractitionerCommunication, IPractitionerQualification } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import PractitionerBuilder from './PractitionerBuilder';
import { PractitionerValidator } from './PractitionerValidator';

export default class Practitioner extends DomainResource implements IPractitioner {
  _active?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IPractitionerCommunication[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  identifier?: IIdentifier[];
  name?: IHumanName[];
  photo?: IAttachment[];
  qualification?: IPractitionerQualification[];
  resourceType = 'Practitioner' as const;
  telecom?: IContactPoint[];

  static builder(): PractitionerBuilder {
    return new PractitionerBuilder();
  }

  toJson(): Practitioner {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Practitioner${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Practitioner${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IPractitioner) {
    super();
    PractitionerValidator(args);
    Object.assign(this, args);
  }
}
