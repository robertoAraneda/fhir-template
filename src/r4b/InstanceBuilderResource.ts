import { Endpoint } from './models/resources';
import { ResourceTypeR4B } from './GlobalResourceTypes';

export const generateInstanceResource = (resourceType: ResourceTypeR4B, data: any) => {
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
