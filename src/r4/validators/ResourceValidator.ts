import { _validateBaseResource } from './BaseValidator';

const Patient = (patient: unknown) => _validateBaseResource(patient, 'Patient');
const Organization = (organization: unknown) => _validateBaseResource(organization, 'Organization');
const Endpoint = (endpoint: unknown) => _validateBaseResource(endpoint, 'Endpoint');
const Person = (person: unknown) => _validateBaseResource(person, 'Person');
const Practitioner = (practitioner: unknown) => _validateBaseResource(practitioner, 'Practitioner');
const PractitionerRole = (practitionerRole: unknown) => _validateBaseResource(practitionerRole, 'PractitionerRole');
const RelatedPerson = (relatedPerson: unknown) => _validateBaseResource(relatedPerson, 'RelatedPerson');
const Group = (group: unknown) => _validateBaseResource(group, 'Group');
const Location = (location: unknown) => _validateBaseResource(location, 'Location');
const Bundle = (bundle: unknown) => _validateBaseResource(bundle, 'Bundle');

export default {
  Patient,
  Organization,
  Endpoint,
  Person,
  Practitioner,
  PractitionerRole,
  RelatedPerson,
  Group,
  Location,
  Bundle,
};
