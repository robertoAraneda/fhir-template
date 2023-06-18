import { Wait } from './validators/BackboneElementValidator';
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

export interface IBackboneElementValidatorProperties {
  EndpointPayload: (data: unknown) => Wait;
  OrganizationQualification: (data: unknown) => Wait;
  PatientContact: (data: unknown) => Wait;
  PatientCommunication: (data: unknown) => Wait;
  PatientLink: (data: unknown) => Wait;
  PersonCommunication: (data: unknown) => Wait;
  PersonLink: (data: unknown) => Wait;
  PractitionerCommunication: (data: unknown) => Wait;
  PractitionerQualification: (data: unknown) => Wait;
  RelatedPersonCommunication: (data: unknown) => Wait;
  GroupMember: (data: unknown) => Wait;
  GroupCharacteristic: (data: unknown) => Wait;
  LocationPosition: (data: unknown) => Wait;
}

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
