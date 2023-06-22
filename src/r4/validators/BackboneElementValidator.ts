import { _validateBackbone } from './BaseValidator';
import { IValidateProperties } from '../../globals/interfaces';

const OrganizationContact = (data: unknown): IValidateProperties => _validateBackbone(data, 'Organization_Contact');
const PatientContact = (data: unknown): IValidateProperties => _validateBackbone(data, 'Patient_Contact');
const PatientCommunication = (data: unknown): IValidateProperties => _validateBackbone(data, 'Patient_Communication');
const PatientLink = (data: unknown): IValidateProperties => _validateBackbone(data, 'Patient_Link');
const PersonLink = (data: unknown): IValidateProperties => _validateBackbone(data, 'Person_Link');
const PractitionerQualification = (data: unknown): IValidateProperties =>
  _validateBackbone(data, 'Practitioner_Qualification');
const PractitionerRoleAvailableTime = (data: unknown): IValidateProperties =>
  _validateBackbone(data, 'PractitionerRole_AvailableTime');
const PractitionerRoleNotAvailable = (data: unknown): IValidateProperties =>
  _validateBackbone(data, 'PractitionerRole_NotAvailable');
const RelatedPersonCommunication = (data: unknown): IValidateProperties =>
  _validateBackbone(data, 'RelatedPerson_Communication');
const GroupCharacteristic = (data: unknown): IValidateProperties => _validateBackbone(data, 'Group_Characteristic');
const GroupMember = (data: unknown): IValidateProperties => _validateBackbone(data, 'Group_Member');
const LocationPosition = (data: unknown): IValidateProperties => _validateBackbone(data, 'Location_Position');
const LocationHoursOfOperation = (data: unknown): IValidateProperties =>
  _validateBackbone(data, 'Location_HoursOfOperation');
const BundleEntrySearch = (data: unknown): IValidateProperties => _validateBackbone(data, 'Bundle_Search');
const BundleEntryRequest = (data: unknown): IValidateProperties => _validateBackbone(data, 'Bundle_Request');
const BundleEntryResponse = (data: unknown): IValidateProperties => _validateBackbone(data, 'Bundle_Response');
const BundleLink = (data: unknown): IValidateProperties => _validateBackbone(data, 'Bundle_Link');
const BundleEntry = (data: unknown): IValidateProperties => _validateBackbone(data, 'Bundle_Entry');

export default {
  OrganizationContact,
  PatientContact,
  PatientCommunication,
  PatientLink,
  PersonLink,
  PractitionerQualification,
  PractitionerRoleAvailableTime,
  PractitionerRoleNotAvailable,
  RelatedPersonCommunication,
  GroupMember,
  GroupCharacteristic,
  LocationPosition,
  LocationHoursOfOperation,
  BundleEntry,
  BundleLink,
  BundleEntryResponse,
  BundleEntrySearch,
  BundleEntryRequest,
};
