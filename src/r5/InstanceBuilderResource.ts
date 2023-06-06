import { Endpoint } from './models/resources';
import { EndpointBuilder } from './builders/resources';
import { ResourceTypeR5 } from './index';

export const generateInstanceResource = (resourceType: ResourceTypeR5) => {
  switch (resourceType) {
    case 'Patient':
      return { data: (data: Partial<Endpoint>) => new EndpointBuilder().fromJSON(data).build() };
    case 'Organization':
    case 'Endpoint':
    case 'Person':
    case 'Practitioner':
    case 'PractitionerRole':
    case 'RelatedPerson':
      return { data: (data: Partial<Endpoint>) => new EndpointBuilder().fromJSON(data).build() };
  }
};
