import * as resource from './models/resources';
import { ResourceTypeR5 } from './GlobalResourceTypes';

export const generateInstanceResource = (resourceType: ResourceTypeR5, data: any) => {
  switch (resourceType) {
    case 'Patient':
      return new resource.Patient(data);
    case 'Organization':
      return new resource.Organization(data);
    case 'Endpoint':
      return new resource.Endpoint(data);
    case 'Person':
      return new resource.Person(data);
    case 'Practitioner':
      return new resource.Practitioner(data);
    case 'PractitionerRole':
      return new resource.PractitionerRole(data);
    case 'RelatedPerson':
      return new resource.RelatedPerson(data);
    case 'Group':
      return new resource.Group(data);
    default:
      throw new Error(`Resource ${resourceType} not supported`);
  }
};
