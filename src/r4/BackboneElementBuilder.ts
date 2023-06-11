import * as BackboneBuilder from './builders/backbones';

export const BackboneElementBuilder = {
  OrganizationContactBuilder: () => new BackboneBuilder.OrganizationContactBuilder(),
  PatientContactBuilder: () => new BackboneBuilder.PatientContactBuilder(),
  PatientCommunicationBuilder: () => new BackboneBuilder.PatientCommunicationBuilder(),
  PatientLinkBuilder: () => new BackboneBuilder.PatientLinkBuilder(),
  PersonLinkBuilder: () => new BackboneBuilder.PersonLinkBuilder(),
  PractitionerQualificationBuilder: () => new BackboneBuilder.PractitionerQualificationBuilder(),
  PractitionerRoleAvailableTimeBuilder: () => new BackboneBuilder.PractitionerRoleAvailableTimeBuilder(),
  PractitionerRoleNotAvailableBuilder: () => new BackboneBuilder.PractitionerRoleNotAvailableBuilder(),
  RelatedPersonCommunicationBuilder: () => new BackboneBuilder.RelatedPersonCommunicationBuilder(),
};
