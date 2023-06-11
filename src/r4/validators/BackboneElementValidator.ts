import { _validateBackbone } from './BaseValidator';
import { IValidateProperties } from '../../globals/interfaces';

export type Wait = Promise<IValidateProperties>;

const OrganizationContact = (data: unknown): Wait => _validateBackbone(data, 'Organization_Contact');
const PatientContact = (data: unknown): Wait => _validateBackbone(data, 'Patient_Contact');
const PatientCommunication = (data: unknown): Wait => _validateBackbone(data, 'Patient_Communication');
const PatientLink = (data: unknown): Wait => _validateBackbone(data, 'Patient_Link');
const PersonLink = (data: unknown): Wait => _validateBackbone(data, 'Person_Link');
const PractitionerQualification = (data: unknown): Wait => _validateBackbone(data, 'Practitioner_Qualification');
const PractitionerRoleAvailableTime = (data: unknown): Wait =>
  _validateBackbone(data, 'PractitionerRole_AvailableTime');
const PractitionerRoleNotAvailable = (data: unknown): Wait => _validateBackbone(data, 'PractitionerRole_NotAvailable');
const RelatedPersonCommunication = (data: unknown): Wait => _validateBackbone(data, 'RelatedPerson_Communication');

export const BackboneElementValidator = {
  OrganizationContact,
  PatientContact,
  PatientCommunication,
  PatientLink,
  PersonLink,
  PractitionerQualification,
  PractitionerRoleAvailableTime,
  PractitionerRoleNotAvailable,
  RelatedPersonCommunication,
};
