import { EndpointPayloadBuilder } from './builders/backbones/EndpointPayloadBuilder';
import { OrganizationQualificationBuilder } from './builders/backbones/OrganizationQualificationBuilder';
import { PatientContactBuilder } from './builders/backbones/PatientContactBuilder';
import { PatientCommunicationBuilder } from './builders/backbones/PatientCommunicationBuilder';
import { PatientLinkBuilder } from './builders/backbones/PatientLinkBuilder';
import { PersonCommunicationBuilder } from './builders/backbones/PersonCommunicationBuilder';
import { PersonLinkBuilder } from './builders/backbones/PersonLinkBuilder';
import { PractitionerCommunicationBuild } from './builders/backbones/PractitionerCommunicationBuild';
import { PractitionerQualificationBuilder } from './builders/backbones/PractitionerQualificationBuilder';
import { RelatedPersonCommunicationBuilder } from './builders/backbones/RelatedPersonCommunicationBuilder';

const BackboneElementBuilder = {
  EndpointPayload: () => new EndpointPayloadBuilder(),
  OrganizationQualification: () => new OrganizationQualificationBuilder(),
  PatientContact: () => new PatientContactBuilder(),
  PatientCommunication: () => new PatientCommunicationBuilder(),
  PatientLink: () => new PatientLinkBuilder(),
  PersonCommunication: () => new PersonCommunicationBuilder(),
  PersonLink: () => new PersonLinkBuilder(),
  PractitionerCommunication: () => new PractitionerCommunicationBuild(),
  PractitionerQualification: () => new PractitionerQualificationBuilder(),
  RelatedPersonCommunication: () => new RelatedPersonCommunicationBuilder(),
};

export default BackboneElementBuilder;
