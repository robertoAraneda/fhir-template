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
  IBundle,
} from './interfaces/resources';

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
  'CareTeam',
  'Encounter',
  'Specimen',
  'Medication',
  'Device',
  'DocumentReference',
  'Composition',
  'CarePlan',
  'Condition',
  'Procedure',
  'Observation',
  'Immunization',
  'HealthcareService',
  'Substance',
  'MessageHeader',
  'MedicationStatement',
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
  | 'Composition'
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
  : T extends 'Composition'
  ? IBundle
  : never;
