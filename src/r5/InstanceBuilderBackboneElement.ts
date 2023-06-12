import { BackboneElementTypeR5 } from './GlobalBackboneElements';
import { PatientCommunication } from './models/backbones/PatientCommunication';
import { PatientContact } from './models/backbones/PatientContact';
import { PatientLink } from './models/backbones/PatientLink';
import { PractitionerQualification } from './models/backbones/PractitionerQualification';
import { RelatedPersonCommunication } from './models/backbones/RelatedPersonCommunication';
import { PersonLink } from './models/backbones/PersonLink';
import { EndpointPayload } from './models/backbones/EndpointPayload';
import { OrganizationQualification } from './models/backbones/OrganizationQualification';
import { PersonCommunication } from './models/backbones/PersonCommunication';
import { PractitionerCommunication } from './models/backbones/PractitionerCommunication';

export const generateInstanceBackboneElement = (backboneType: BackboneElementTypeR5, data: any) => {
  switch (backboneType) {
    case 'EndpointPayload':
      return new EndpointPayload(data);
    case 'OrganizationQualification':
      return new OrganizationQualification(data);
    case 'PatientCommunication':
      return new PatientCommunication(data);
    case 'PatientContact':
      return new PatientContact(data);
    case 'PatientLink':
      return new PatientLink(data);
    case 'PersonCommunication':
      return new PersonCommunication(data);
    case 'PersonLink':
      return new PersonLink(data);
    case 'PractitionerQualification':
      return new PractitionerQualification(data);
    case 'RelatedPersonCommunication':
      return new RelatedPersonCommunication(data);
    case 'PractitionerCommunication':
      return new PractitionerCommunication(data);

    default:
      throw new Error(`BackboneElement ${backboneType} not supported`);
  }
};
