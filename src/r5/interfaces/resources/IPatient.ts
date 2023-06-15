import { IDomainResource, IElement } from '../base';
import {
  IIdentifier,
  IHumanName,
  IContactPoint,
  IAddress,
  ICodeableConcept,
  IAttachment,
  IReference,
} from '../datatypes';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import { IPatientContact, IPatientCommunication, IPatientLink } from '../backbones';

export interface IPatient extends IDomainResource {
  /**
   * An identifier for this patient
   * @see {@link https://www.hl7.org/fhir/datatypes.html#Identifier Identifier}
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this patient's record is in active use
   * @description xs:boolean
   * @description xs:default true
   * @type {boolean} active
   * @see {@link https://www.hl7.org/fhir/patient-definitions.html#Patient.active active}
   */
  active?: boolean;
  name?: IHumanName[];
  telecom?: IContactPoint[];
  gender?: AdministrativeGenderEnum | AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: IAddress[];
  maritalStatus?: ICodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  photo?: IAttachment[];
  contact?: IPatientContact[];
  communication?: IPatientCommunication[];
  generalPractitioner?: IReference[];
  managingOrganization?: IReference;
  link?: IPatientLink[];
  _active?: IElement;
  _birthDate?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;
}
