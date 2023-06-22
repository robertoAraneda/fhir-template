import { _validateBaseResource } from './BaseValidator';
import { IValidateProperties } from '../../globals/interfaces';

const Patient = (patient: unknown): IValidateProperties => _validateBaseResource(patient, 'Patient');
const Organization = (organization: unknown): IValidateProperties =>
  _validateBaseResource(organization, 'Organization');
const Endpoint = (endpoint: unknown): IValidateProperties => _validateBaseResource(endpoint, 'Endpoint');
const Person = (person: unknown): IValidateProperties => _validateBaseResource(person, 'Person');
const Practitioner = (practitioner: unknown): IValidateProperties =>
  _validateBaseResource(practitioner, 'Practitioner');
const PractitionerRole = (practitionerRole: unknown): IValidateProperties =>
  _validateBaseResource(practitionerRole, 'PractitionerRole');
const RelatedPerson = (relatedPerson: unknown): IValidateProperties =>
  _validateBaseResource(relatedPerson, 'RelatedPerson');
const Group = (group: unknown): IValidateProperties => _validateBaseResource(group, 'Group');
const Location = (location: unknown): IValidateProperties => _validateBaseResource(location, 'Location');
const Bundle = (bundle: unknown): IValidateProperties => _validateBaseResource(bundle, 'Bundle');

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
