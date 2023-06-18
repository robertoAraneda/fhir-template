import { Wait } from './validators/BackboneElementValidator';
import {
  IEndpoint,
  ILocation,
  IOrganization,
  IPatient,
  IPerson,
  IPractitioner,
  IPractitionerRole,
  IRelatedPerson,
} from './interfaces/resources';
import { IGroup } from './interfaces/resources/IGroup';

export interface IResourceValidatorProperties {
  Patient: (data: unknown) => Wait;
  Organization: (data: unknown) => Wait;
  Endpoint: (data: unknown) => Wait;
  Person: (data: unknown) => Wait;
  Practitioner: (data: unknown) => Wait;
  PractitionerRole: (data: unknown) => Wait;
  RelatedPerson: (data: unknown) => Wait;
  Group: (data: unknown) => Wait;
  Location: (data: unknown) => Wait;
}

export type ResourceTypeR4 =
  | 'Patient'
  | 'Organization'
  | 'Endpoint'
  | 'Person'
  | 'Practitioner'
  | 'PractitionerRole'
  | 'Group'
  | 'Location'
  | 'RelatedPerson';

export type ParseResourceTypeR4<T> = T extends 'Patient'
  ? IPatient
  : T extends 'Organization'
  ? IOrganization
  : T extends 'Endpoint'
  ? IEndpoint
  : T extends 'Person'
  ? IPerson
  : T extends 'Practitioner'
  ? IPractitioner
  : T extends 'PractitionerRole'
  ? IPractitionerRole
  : T extends 'RelatedPerson'
  ? IRelatedPerson
  : T extends 'Group'
  ? IGroup
  : T extends 'Location'
  ? ILocation
  : never;
