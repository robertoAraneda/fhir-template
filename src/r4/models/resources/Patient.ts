import { IPatient } from '../../interfaces/resources';
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
import { IPatientCommunication, IPatientContact, IPatientLink } from '../../interfaces/backbones';
import { AdministrativeGenderEnum } from '../../enums';
import { AdministrativeGenderType } from '../../types';
import DomainResource from '../base/DomainResource';
import { IPatientBuilder, PatientBuilder } from './PatientBuilder';

/**
 * @description FHIR R4
 */
export default class Patient extends DomainResource implements IPatient {
  resourceType = 'Patient';

  // Patient attributes
  /**
   * @description An identifier for this patient
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether this patient's record is in active use
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

  // Extensions
  _active?: IElement;
  _birthDate?: IElement;
  _multipleBirthBoolean?: IElement;
  _multipleBirthInteger?: IElement;
  _deceasedBoolean?: IElement;
  _deceasedDateTime?: IElement;
  _gender?: IElement;

  static get resourceType(): string {
    return 'Patient';
  }

  static builder(): IPatientBuilder {
    return new PatientBuilder();
  }

  constructor(args?: Patient) {
    super();
    Object.assign(this, args);
  }
}
