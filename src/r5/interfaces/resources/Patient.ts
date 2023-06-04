import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { HumanName } from '../datatypes/HumanName';
import { ContactPoint } from '../datatypes/ContactPoint';
import { AdministrativeGender } from '../../enums/AdministrativeGender';
import { AdministrativeGenderType } from '../../types/AdministrativeGenderType';
import { Address } from '../datatypes/Address';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Reference } from '../base/Reference';
import { Attachment } from '../datatypes/Attachment';
import { PatientContact } from '../backbones/PatientContact';
import { PatientCommunication } from '../backbones/PatientCommunication';
import { PatientLink } from '../backbones/PatientLink';
import { Element } from '../base/Element';

export interface Patient extends DomainResource {
  /**
   * An identifier for this patient
   * @see {@link https://www.hl7.org/fhir/datatypes.html#Identifier Identifier}
   */
  identifier?: Identifier[];

  /**
   * @description Whether this patient's record is in active use
   * @description xs:boolean
   * @description xs:default true
   * @type {boolean} active
   * @see {@link https://www.hl7.org/fhir/patient-definitions.html#Patient.active active}
   */
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: AdministrativeGender | AdministrativeGenderType;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  photo?: Attachment[];
  contact?: PatientContact[];
  communication?: PatientCommunication[];
  generalPractitioner?: Reference[];
  managingOrganization?: Reference;
  link?: PatientLink[];
  _active?: Element;
  _birthDate?: Element;
  _multipleBirthBoolean?: Element;
  _multipleBirthInteger?: Element;
  _deceasedBoolean?: Element;
  _deceasedDateTime?: Element;
  _gender?: Element;
}
