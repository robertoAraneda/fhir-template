import { _validateBackbone } from './BaseValidator';
import { IValidateProperties } from '../interfaces/IValidateProperties';

export type Wait = Promise<IValidateProperties>;

const EndpointPayload = (data: unknown): Wait => _validateBackbone(data, 'Endpoint_Payload');
const OrganizationQualification = (data: unknown): Wait => _validateBackbone(data, 'Organization_Qualification');
const PatientContact = (data: unknown): Wait => _validateBackbone(data, 'Patient_Contact');
const PatientCommunication = (data: unknown): Wait => _validateBackbone(data, 'Patient_Communication');
const PatientLink = (data: unknown): Wait => _validateBackbone(data, 'Patient_Link');
const PersonCommunication = (data: unknown): Wait => _validateBackbone(data, 'Person_Communication');
const PersonLink = (data: unknown): Wait => _validateBackbone(data, 'Person_Link');
const PractitionerCommunication = (data: unknown): Wait => _validateBackbone(data, 'Practitioner_Communication');
const PractitionerQualification = (data: unknown): Wait => _validateBackbone(data, 'Practitioner_Qualification');
const RelatedPersonCommunication = (data: unknown): Wait => _validateBackbone(data, 'RelatedPerson_Communication');
const GroupCharacteristic = (data: unknown): Wait => _validateBackbone(data, 'Group_Characteristic');
const GroupMember = (data: unknown): Wait => _validateBackbone(data, 'Group_Member');
const LocationPosition = (data: unknown): Wait => _validateBackbone(data, 'Location_Position');

export const BackboneElementValidator = {
  EndpointPayload,
  OrganizationQualification,
  PatientContact,
  PatientCommunication,
  PatientLink,
  PersonCommunication,
  PersonLink,
  PractitionerCommunication,
  PractitionerQualification,
  RelatedPersonCommunication,
  GroupMember,
  GroupCharacteristic,
  LocationPosition,
};
