import * as resource from './models/resources';
import { ResourceTypeR4 } from './GlobalResourceTypes';

export const generateInstanceResource = (resourceType: ResourceTypeR4, data: any) => {
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
    case 'Group':
      return new resource.Group(data);
    case 'RelatedPerson':
      return new resource.RelatedPerson(data);
    case 'Location':
      return new resource.Location(data);
    case 'Bundle':
      return new resource.Bundle(data);

    default:
      throw new Error(`Resource ${resourceType} not supported`);
  }
};
