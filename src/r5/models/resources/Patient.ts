import { IPatient } from '../../interfaces/resources';
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
  IReference,
} from '../../interfaces/datatypes';
import { IPatientCommunication, IPatientContact, IPatientLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';

export default class Patient implements IPatient {
  active?: boolean;
  address?: IAddress[];
  birthDate?: string;
  communication?: IPatientCommunication[];
  contact?: IPatientContact[];
  contained?: IResource[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  extension?: IExtension[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  generalPractitioner?: IReference[];
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  link?: IPatientLink[];
  managingOrganization?: IReference;
  maritalStatus?: ICodeableConcept;
  meta?: IMeta;
  modifierExtension?: IExtension[];
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  name?: IHumanName[];
  photo?: IAttachment[];
  resourceType: string = 'Patient';
  telecom?: IContactPoint[];
  text?: INarrative;
  _active?: IElement;
  _birthDate?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;

  constructor(args?: Partial<Patient>) {
    Object.assign(this, args);
  }
}
