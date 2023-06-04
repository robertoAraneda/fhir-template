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

class BackboneElementBuilder {
  private constructor() {}

  static EndpointPayload = () => new EndpointPayloadBuilder();
  static OrganizationQualification = () => new OrganizationQualificationBuilder();
  static PatientContact = () => new PatientContactBuilder();
  static PatientCommunication = () => new PatientCommunicationBuilder();
  static PatientLink = () => new PatientLinkBuilder();
  static PersonCommunication = () => new PersonCommunicationBuilder();
  static PersonLink = () => new PersonLinkBuilder();
  static PractitionerCommunication = () => new PractitionerCommunicationBuild();
  static PractitionerQualification = () => new PractitionerQualificationBuilder();
  static RelatedPersonCommunication = () => new RelatedPersonCommunicationBuilder();
}

export default BackboneElementBuilder;
