import {
  IEndpoint,
  ILocation,
  IOrganization,
  IPatient,
  IPerson,
  IPractitioner,
  IPractitionerRole,
  IRelatedPerson,
  IGroup,
} from './interfaces/resources';
import { IBundle } from './interfaces/resources/IBundle';
import { IValidateProperties } from '../globals/interfaces';

export interface IResourceValidatorProperties {
  Patient: (data: unknown) => IValidateProperties;
  Organization: (data: unknown) => IValidateProperties;
  Endpoint: (data: unknown) => IValidateProperties;
  Person: (data: unknown) => IValidateProperties;
  Practitioner: (data: unknown) => IValidateProperties;
  PractitionerRole: (data: unknown) => IValidateProperties;
  RelatedPerson: (data: unknown) => IValidateProperties;
  Group: (data: unknown) => IValidateProperties;
  Location: (data: unknown) => IValidateProperties;
  Bundle: (data: unknown) => IValidateProperties;
}

export const ResourcesListR4 = [
  'Patient',
  'Organization',
  'Endpoint',
  'Person',
  'Practitioner',
  'PractitionerRole',
  'RelatedPerson',
  'Group',
  'Location',
  'Bundle',
] as const;

export type ResourceTypeR4FromArray = (typeof ResourcesListR4)[number];

export type ResourceTypeR4 =
  | 'Patient'
  | 'Organization'
  | 'Endpoint'
  | 'Person'
  | 'Practitioner'
  | 'PractitionerRole'
  | 'Group'
  | 'Location'
  | 'Bundle'
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
  : T extends 'Bundle'
  ? IBundle
  : never;
