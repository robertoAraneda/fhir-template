import { Endpoint } from './models/resources';
import { ResourceTypeR5 } from './GlobalResourceTypes';

export const generateInstanceResource = (resourceType: ResourceTypeR5, data: any) => {
  switch (resourceType) {
    case 'Patient':
      return new Endpoint(data);
    case 'Organization':
    case 'Endpoint':
    case 'Person':
    case 'Practitioner':
    case 'PractitionerRole':
    case 'RelatedPerson':
      return new Endpoint(data);
  }
};
