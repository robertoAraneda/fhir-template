import * as ResourceBuilders from './builders/resources';

export const ResourceBuilder = {
  PatientBuilder: () => new ResourceBuilders.PatientBuilder(),
  OrganizationBuilder: () => new ResourceBuilders.OrganizationBuilder(),
  EndpointBuilder: () => new ResourceBuilders.EndpointBuilder(),
  PersonBuilder: () => new ResourceBuilders.PersonBuilder(),
  PractitionerBuilder: () => new ResourceBuilders.PractitionerBuilder(),
  PractitionerRoleBuilder: () => new ResourceBuilders.PractitionerRoleBuilder(),
  RelatedPersonBuilder: () => new ResourceBuilders.RelatedPersonBuilder(),
};