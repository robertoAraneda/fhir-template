import { IPatient } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { IPatientCommunication, IPatientContact, IPatientLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import PatientBuilder from './PatientBuilder';

export default class Patient extends DomainResource implements IPatient {
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IPatientCommunication[];
  contact?: IPatientContact[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  generalPractitioner?: IReference[];
  identifier?: IIdentifier[];
  link?: IPatientLink[];
  managingOrganization?: IReference;
  maritalStatus?: ICodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  name?: IHumanName[];
  photo?: IAttachment[];
  resourceType: string = 'Patient';
  telecom?: IContactPoint[];
  _active?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;

  static builder(): PatientBuilder {
    return new PatientBuilder();
  }

  toJson(): Patient {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Patient${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Patient${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IPatient) {
    super();
    Object.assign(this, args);
  }
}
