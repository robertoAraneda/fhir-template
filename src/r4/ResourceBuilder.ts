import * as ResourceBuilders from './builders/resources';

export const ResourceBuilder = {
  Patient: () => new ResourceBuilders.PatientBuilder(),
  Organization: () => new ResourceBuilders.OrganizationBuilder(),
  Endpoint: () => new ResourceBuilders.EndpointBuilder(),
  Person: () => new ResourceBuilders.PersonBuilder(),
  Practitioner: () => new ResourceBuilders.PractitionerBuilder(),
  PractitionerRole: () => new ResourceBuilders.PractitionerRoleBuilder(),
  RelatedPerson: () => new ResourceBuilders.RelatedPersonBuilder(),
  Group: () => new ResourceBuilders.GroupBuilder(),
};
