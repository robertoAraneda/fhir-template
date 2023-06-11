import { Endpoint, Organization, Person, Practitioner, PractitionerRole } from './models/resources';
import { ResourceTypeR4 } from './GlobalResourceTypes';

export const generateInstanceResource = (resourceType: ResourceTypeR4, data: any) => {
  switch (resourceType) {
    case 'Patient':
      return new Endpoint(data);
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
      return new Endpoint(data);
    default:
      throw new Error(`Resource ${resourceType} not supported`);
  }
};
