import { _validateBaseResource } from './BaseValidator';
import { BundleValidator as Bundle } from '../models/resources/BundleValidator';
import { CompositionValidator as Composition } from '../models/resources/CompositionValidator';
import { EndpointValidator as Endpoint } from '../models/resources/EndpointValidator';

const Patient = (patient: unknown) => _validateBaseResource(patient, 'Patient');
const Organization = (organization: unknown) => _validateBaseResource(organization, 'Organization');
const Person = (person: unknown) => _validateBaseResource(person, 'Person');
const Practitioner = (practitioner: unknown) => _validateBaseResource(practitioner, 'Practitioner');
const PractitionerRole = (practitionerRole: unknown) => _validateBaseResource(practitionerRole, 'PractitionerRole');
const RelatedPerson = (relatedPerson: unknown) => _validateBaseResource(relatedPerson, 'RelatedPerson');
const Group = (group: unknown) => _validateBaseResource(group, 'Group');
const Location = (location: unknown) => _validateBaseResource(location, 'Location');

export type Validator = {
  Endpoint: typeof Endpoint;
  Bundle: typeof Bundle;
  Composition: typeof Composition;
  Patient: typeof Patient;
  Organization: typeof Organization;
  Person: typeof Person;
  Practitioner: typeof Practitioner;
  PractitionerRole: typeof PractitionerRole;
  RelatedPerson: typeof RelatedPerson;
  Group: typeof Group;
  Location: typeof Location;
  CareTeam: any;
  Encounter: any;
  Specimen: any;
  Medication: any;
  Device: any;
  DocumentReference: any;
  CarePlan: any;
  Condition: any;
  Procedure: any;
  Observation: any;
  Immunization: any;
  HealthcareService: any;
  Substance: any;
  MessageHeader: any;
};

export default {
  Endpoint,
  Bundle,
  Composition,
} as Validator;
