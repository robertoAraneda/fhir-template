import {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
  IGroupCharacteristic,
  IGroupMember,
  ILocationHoursOfOperation,
  ILocationPosition,
  IOrganizationContact,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IPersonLink,
  IPractitionerQualification,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
  IRelatedPersonCommunication,
} from './interfaces/backbones';

export type BackboneElementTypeR4 =
  | 'OrganizationContact'
  | 'PatientCommunication'
  | 'PatientContact'
  | 'PatientLink'
  | 'PersonLink'
  | 'PractitionerQualification'
  | 'PractitionerRoleAvailableTime'
  | 'PractitionerRoleNotAvailable'
  | 'GroupCharacteristic'
  | 'GroupMember'
  | 'LocationPosition'
  | 'LocationHoursOfOperation'
  | 'BundleEntryRequest'
  | 'BundleEntryResponse'
  | 'BundleEntrySearch'
  | 'BundleEntry'
  | 'BundleLink'
  | 'RelatedPersonCommunication';

export type ParseBackboneElementTypeR4<T> = T extends 'OrganizationContact'
  ? IOrganizationContact
  : T extends 'PatientCommunication'
  ? IPatientCommunication
  : T extends 'PatientContact'
  ? IPatientContact
  : T extends 'PatientLink'
  ? IPatientLink
  : T extends 'PersonLink'
  ? IPersonLink
  : T extends 'PractitionerQualification'
  ? IPractitionerQualification
  : T extends 'PractitionerRoleAvailableTime'
  ? IPractitionerRoleAvailableTime
  : T extends 'PractitionerRoleNotAvailable'
  ? IPractitionerRoleNotAvailable
  : T extends 'RelatedPersonCommunication'
  ? IRelatedPersonCommunication
  : T extends 'GroupCharacteristic'
  ? IGroupCharacteristic
  : T extends 'GroupMember'
  ? IGroupMember
  : T extends 'LocationPosition'
  ? ILocationPosition
  : T extends 'LocationHoursOfOperation'
  ? ILocationHoursOfOperation
  : T extends 'BundleEntryRequest'
  ? IBundleEntryRequest
  : T extends 'BundleEntryResponse'
  ? IBundleEntryResponse
  : T extends 'BundleEntrySearch'
  ? IBundleEntrySearch
  : T extends 'BundleEntry'
  ? IBundleEntry
  : T extends 'BundleLink'
  ? IBundleLink
  : never;
