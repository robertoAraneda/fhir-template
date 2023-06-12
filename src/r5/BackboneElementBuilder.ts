import * as BackboneBuilder from './builders/backbones';

export const BackboneElementBuilder = {
  EndpointPayload: () => new BackboneBuilder.EndpointPayloadBuilder(),
  OrganizationQualification: () => new BackboneBuilder.OrganizationQualificationBuilder(),
  PatientContact: () => new BackboneBuilder.PatientContactBuilder(),
  PatientCommunication: () => new BackboneBuilder.PatientCommunicationBuilder(),
  PatientLink: () => new BackboneBuilder.PatientLinkBuilder(),
  PersonCommunication: () => new BackboneBuilder.PersonCommunicationBuilder(),
  PersonLink: () => new BackboneBuilder.PersonLinkBuilder(),
  PractitionerCommunication: () => new BackboneBuilder.PractitionerCommunicationBuilder(),
  PractitionerQualification: () => new BackboneBuilder.PractitionerQualificationBuilder(),
  RelatedPersonCommunication: () => new BackboneBuilder.RelatedPersonCommunicationBuilder(),
};
