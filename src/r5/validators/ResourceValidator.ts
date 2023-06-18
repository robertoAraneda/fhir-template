import { _validateBaseResource } from './BaseValidator';
import { IValidateProperties } from '../interfaces/IValidateProperties';

type Wait = Promise<IValidateProperties>;

const Patient = async (patient: unknown): Wait => _validateBaseResource(patient, 'Patient');
const Organization = async (organization: unknown): Wait => _validateBaseResource(organization, 'Organization');
const Endpoint = async (endpoint: unknown): Wait => _validateBaseResource(endpoint, 'Endpoint');
const Person = async (person: unknown): Wait => _validateBaseResource(person, 'Person');
const Practitioner = async (practitioner: unknown): Wait => _validateBaseResource(practitioner, 'Practitioner');
const PractitionerRole = async (practitionerRole: unknown): Wait =>
  _validateBaseResource(practitionerRole, 'PractitionerRole');
const RelatedPerson = async (relatedPerson: unknown): Wait => _validateBaseResource(relatedPerson, 'RelatedPerson');
const Group = async (group: unknown): Wait => _validateBaseResource(group, 'Group');
const Location = async (location: unknown): Wait => _validateBaseResource(location, 'Location');

export const ResourceValidator = {
  Patient,
  Organization,
  Endpoint,
  Person,
  Practitioner,
  PractitionerRole,
  RelatedPerson,
  Group,
  Location,
};
