import * as BackboneBuilder from './builders/backbones';

export const BackboneElementBuilder = {
  EndpointPayloadBuilder: () => new BackboneBuilder.EndpointPayloadBuilder(),
  OrganizationQualificationBuilder: () => new BackboneBuilder.OrganizationQualificationBuilder(),
  PatientContact: () => new BackboneBuilder.PatientContactBuilder(),
  PatientCommunication: () => new BackboneBuilder.PatientCommunicationBuilder(),
  PatientLink: () => new BackboneBuilder.PatientLinkBuilder(),
  PersonCommunicationBuilder: () => new BackboneBuilder.PersonCommunicationBuilder(),
  PersonLink: () => new BackboneBuilder.PersonLinkBuilder(),
  PractitionerCommunicationBuilder: () => new BackboneBuilder.PractitionerCommunicationBuilder(),
  PractitionerQualification: () => new BackboneBuilder.PractitionerQualificationBuilder(),
  RelatedPersonCommunication: () => new BackboneBuilder.RelatedPersonCommunicationBuilder(),
};
