import {
  IEndpointPayload,
  IGroupCharacteristic,
  IGroupMember,
  ILocationPosition,
  IOrganizationQualification,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IPersonCommunication,
  IPersonLink,
  IPractitionerCommunication,
  IPractitionerQualification,
  IRelatedPersonCommunication,
} from './interfaces/backbones';

export type BackboneElementTypeR5 =
  | 'EndpointPayload'
  | 'OrganizationQualification'
  | 'PatientCommunication'
  | 'PatientContact'
  | 'PatientLink'
  | 'PersonCommunication'
  | 'PersonLink'
  | 'PractitionerCommunication'
  | 'PractitionerQualification'
  | 'GroupMember'
  | 'GroupCharacteristic'
  | 'LocationPosition'
  | 'RelatedPersonCommunication';

export type ParseBackboneElementTypeR5<T> = T extends 'PatientCommunication'
  ? IPatientCommunication
  : T extends 'EndpointPayload'
  ? IEndpointPayload
  : T extends 'OrganizationQualification'
  ? IOrganizationQualification
  : T extends 'PatientContact'
  ? IPatientContact
  : T extends 'PatientLink'
  ? IPatientLink
  : T extends 'PersonCommunication'
  ? IPersonCommunication
  : T extends 'PersonLink'
  ? IPersonLink
  : T extends 'PractitionerCommunication'
  ? IPractitionerCommunication
  : T extends 'PractitionerQualification'
  ? IPractitionerQualification
  : T extends 'RelatedPersonCommunication'
  ? IRelatedPersonCommunication
  : T extends 'GroupMember'
  ? IGroupMember
  : T extends 'GroupCharacteristic'
  ? IGroupCharacteristic
  : T extends 'LocationPosition'
  ? ILocationPosition
  : never;
