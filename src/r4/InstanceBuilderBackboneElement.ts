import { BackboneElementTypeR4 } from './GlobalBackboneElements';
import {
  OrganizationContact,
  PractitionerRoleNotAvailable,
  PatientCommunication,
  PatientContact,
  PatientLink,
  PractitionerQualification,
  PractitionerRoleAvailableTime,
  RelatedPersonCommunication,
  PersonLink,
} from './models/backbones';

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
