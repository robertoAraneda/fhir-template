import {
  Endpoint,
  Organization,
  Patient,
  Person,
  Practitioner,
  PractitionerRole,
  RelatedPerson,
} from './models/resources';
import { ResourceTypeR5 } from './GlobalResourceTypes';

export const generateInstanceResource = (resourceType: ResourceTypeR5, data: any) => {
  switch (resourceType) {
    case 'Patient':
      return new Patient(data);
    case 'Organization':
      return new Organization(data);
    case 'Endpoint':
      return new Endpoint(data);
    case 'Person':
      return new Person(data);
    case 'Practitioner':
      return new Practitioner(data);
    case 'PractitionerRole':
      return new PractitionerRole(data);
    case 'RelatedPerson':
      return new RelatedPerson(data);
  }
};
