import {
  IEndpoint,
  IGroup,
  ILocation,
  IOrganization,
  IPatient,
  IPerson,
  IPractitioner,
  IPractitionerRole,
  IRelatedPerson,
} from './interfaces/resources';
import { IBundle } from './interfaces/resources/IBundle';

export const ResourcesListR5 = [
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

export type ResourceTypeR5FromArray = (typeof ResourcesListR5)[number];

export type ResourceTypeR5 =
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

export type ParseResourceTypeR5<T> = T extends 'Patient'
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
