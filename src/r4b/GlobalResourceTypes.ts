import { Wait } from './validators/BackboneElementValidator';
import {
  IEndpoint,
  IOrganization,
  IPatient,
  IPerson,
  IPractitioner,
  IPractitionerRole,
  IRelatedPerson,
} from './interfaces/resources';

export interface IResourceValidatorProperties {
  Patient: (data: unknown) => Wait;
  Organization: (data: unknown) => Wait;
  Endpoint: (data: unknown) => Wait;
  Person: (data: unknown) => Wait;
  Practitioner: (data: unknown) => Wait;
  PractitionerRole: (data: unknown) => Wait;
  RelatedPerson: (data: unknown) => Wait;
}

export type ResourceTypeR4B =
  | 'Patient'
  | 'Organization'
  | 'Endpoint'
  | 'Person'
  | 'Practitioner'
  | 'PractitionerRole'
  | 'RelatedPerson';

export type ResourceType<T> = T extends 'Patient'
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
  : never;
