import { BackboneElementTypeR5 } from './GlobalBackboneElements';
import * as backbones from './models/backbones';

export const generateInstanceBackboneElement = (backboneType: BackboneElementTypeR5, data: any) => {
  switch (backboneType) {
    case 'EndpointPayload':
      return new backbones.EndpointPayload(data);
    case 'OrganizationQualification':
      return new backbones.OrganizationQualification(data);
    case 'PatientCommunication':
      return new backbones.PatientCommunication(data);
    case 'PatientContact':
      return new backbones.PatientContact(data);
    case 'PatientLink':
      return new backbones.PatientLink(data);
    case 'PersonCommunication':
      return new backbones.PersonCommunication(data);
    case 'PersonLink':
      return new backbones.PersonLink(data);
    case 'PractitionerQualification':
      return new backbones.PractitionerQualification(data);
    case 'RelatedPersonCommunication':
      return new backbones.RelatedPersonCommunication(data);
    case 'PractitionerCommunication':
      return new backbones.PractitionerCommunication(data);
    case 'GroupMember':
      return new backbones.GroupMember(data);
    case 'GroupCharacteristic':
      return new backbones.GroupCharacteristic(data);
    case 'LocationPosition':
      return new backbones.LocationPosition(data);

    default:
      throw new Error(`BackboneElement ${backboneType} not supported`);
  }
};
