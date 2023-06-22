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
