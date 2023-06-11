import { BackboneElementTypeR4 } from './GlobalBackboneElements';
import { OrganizationContact } from './models/backbones/OrganizationContact';
import { PractitionerRoleNotAvailable } from './models/backbones/PractitionerRoleNotAvailable';
import { PatientCommunication } from './models/backbones/PatientCommunication';
import { PatientContact } from './models/backbones/PatientContact';
import { PatientLink } from './models/backbones/PatientLink';
import { PractitionerQualification } from './models/backbones/PractitionerQualification';
import { PractitionerRoleAvailableTime } from './models/backbones/PractitionerRoleAvailableTime';
import { RelatedPersonCommunication } from './models/backbones/RelatedPersonCommunication';
import { PersonLink } from './models/backbones/PersonLink';

export const generateInstanceBackboneElement = (backboneType: BackboneElementTypeR4, data: any) => {
  switch (backboneType) {
    case 'OrganizationContact':
      return new OrganizationContact(data);
    case 'PractitionerRoleNotAvailable':
      return new PractitionerRoleNotAvailable(data);
    case 'PatientCommunication':
      return new PatientCommunication(data);
    case 'PatientContact':
      return new PatientContact(data);
    case 'PatientLink':
      return new PatientLink(data);
    case 'PersonLink':
      return new PersonLink(data);
    case 'PractitionerQualification':
      return new PractitionerQualification(data);
    case 'PractitionerRoleAvailableTime':
      return new PractitionerRoleAvailableTime(data);
    case 'RelatedPersonCommunication':
      return new RelatedPersonCommunication(data);

    default:
      throw new Error(`BackboneElement ${backboneType} not supported`);
  }
};
