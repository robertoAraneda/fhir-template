import { _validateBaseResource } from './validators/BaseValidator';
import { ValidateProperties } from './interfaces/ValidateProperties';

type Wait = Promise<ValidateProperties>;
const ResourceValidator = {
  Patient: async (patient: unknown): Wait => _validateBaseResource(patient, 'Patient'),
  Organization: async (organization: unknown): Wait => _validateBaseResource(organization, 'Organization'),
  Endpoint: async (endpoint: unknown): Wait => _validateBaseResource(endpoint, 'Endpoint'),
  Person: async (person: unknown): Wait => _validateBaseResource(person, 'Person'),
  Practitioner: async (practitioner: unknown): Wait => _validateBaseResource(practitioner, 'Practitioner'),
  PractitionerRole: async (practitionerRole: unknown): Wait =>
    _validateBaseResource(practitionerRole, 'PractitionerRole'),
  RelatedPerson: async (relatedPerson: unknown): Wait => _validateBaseResource(relatedPerson, 'RelatedPerson'),
};

export default ResourceValidator;
