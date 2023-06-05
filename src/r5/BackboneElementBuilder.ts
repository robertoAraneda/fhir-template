import * as BackboneBuilder from './builders/backbones';

export const BackboneElementBuilder = {
  EndpointPayloadBuilder: new BackboneBuilder.EndpointPayloadBuilder(),
  OrganizationQualificationBuilder: new BackboneBuilder.OrganizationQualificationBuilder(),
  PatientContactBuilder: new BackboneBuilder.PatientContactBuilder(),
  PatientCommunicationBuilder: new BackboneBuilder.PatientCommunicationBuilder(),
  PatientLinkBuilder: new BackboneBuilder.PatientLinkBuilder(),
  PersonCommunicationBuilder: new BackboneBuilder.PersonCommunicationBuilder(),
  PersonLinkBuilder: new BackboneBuilder.PersonLinkBuilder(),
  PractitionerCommunicationBuilder: new BackboneBuilder.PractitionerCommunicationBuilder(),
  PractitionerQualificationBuilder: new BackboneBuilder.PractitionerQualificationBuilder(),
  RelatedPersonCommunicationBuilder: new BackboneBuilder.RelatedPersonCommunicationBuilder(),
};
