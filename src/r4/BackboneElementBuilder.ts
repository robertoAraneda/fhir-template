import * as BackboneBuilder from './builders/backbones';

export const BackboneElementBuilder = {
  OrganizationContact: () => new BackboneBuilder.OrganizationContactBuilder(),
  PatientContact: () => new BackboneBuilder.PatientContactBuilder(),
  PatientCommunication: () => new BackboneBuilder.PatientCommunicationBuilder(),
  PatientLink: () => new BackboneBuilder.PatientLinkBuilder(),
  PersonLink: () => new BackboneBuilder.PersonLinkBuilder(),
  PractitionerQualification: () => new BackboneBuilder.PractitionerQualificationBuilder(),
  PractitionerRoleAvailableTime: () => new BackboneBuilder.PractitionerRoleAvailableTimeBuilder(),
  PractitionerRoleNotAvailable: () => new BackboneBuilder.PractitionerRoleNotAvailableBuilder(),
  RelatedPersonCommunication: () => new BackboneBuilder.RelatedPersonCommunicationBuilder(),
};
