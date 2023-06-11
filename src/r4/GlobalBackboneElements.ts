import { Wait } from './validators/BackboneElementValidator';
import {
  IOrganizationContact,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IPractitionerQualification,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
  IRelatedPersonCommunication,
} from './interfaces/backbones';

export interface IBackboneElementValidatorProperties {
  OrganizationContact: (data: unknown) => Wait;
  PatientContact: (data: unknown) => Wait;
  PatientCommunication: (data: unknown) => Wait;
  PatientLink: (data: unknown) => Wait;
  PersonLink: (data: unknown) => Wait;
  PractitionerQualification: (data: unknown) => Wait;
  PractitionerRoleAvailableTime: (data: unknown) => Wait;
  PractitionerRoleNotAvailable: (data: unknown) => Wait;
  RelatedPersonCommunication: (data: unknown) => Wait;
}

export type BackboneElementTypeR4 =
  | 'OrganizationContact'
  | 'PatientCommunication'
  | 'PatientContact'
  | 'PatientLink'
  | 'PractitionerQualification'
  | 'PractitionerRoleAvailableTime'
  | 'PractitionerRoleNotAvailable'
  | 'RelatedPersonCommunication';

export type ParseBackboneElementTypeR4<T> = T extends 'OrganizationContact'
  ? IOrganizationContact
  : T extends 'PatientCommunication'
  ? IPatientCommunication
  : T extends 'PatientContact'
  ? IPatientContact
  : T extends 'PatientLink'
  ? IPatientLink
  : T extends 'PractitionerQualification'
  ? IPractitionerQualification
  : T extends 'PractitionerRoleAvailableTime'
  ? IPractitionerRoleAvailableTime
  : T extends 'PractitionerRoleNotAvailable'
  ? IPractitionerRoleNotAvailable
  : T extends 'RelatedPersonCommunication'
  ? IRelatedPersonCommunication
  : never;
