import { BackboneElementTypeR4 } from './GlobalBackboneElements';
import * as backbone from './models/backbones';

export const generateInstanceBackboneElement = (backboneType: BackboneElementTypeR4, data: any) => {
  switch (backboneType) {
    case 'OrganizationContact':
      return new backbone.OrganizationContact(data);
    case 'PractitionerRoleNotAvailable':
      return new backbone.PractitionerRoleNotAvailable(data);
    case 'PatientCommunication':
      return new backbone.PatientCommunication(data);
    case 'PatientContact':
      return new backbone.PatientContact(data);
    case 'PatientLink':
      return new backbone.PatientLink(data);
    case 'PersonLink':
      return new backbone.PersonLink(data);
    case 'PractitionerQualification':
      return new backbone.PractitionerQualification(data);
    case 'PractitionerRoleAvailableTime':
      return new backbone.PractitionerRoleAvailableTime(data);
    case 'RelatedPersonCommunication':
      return new backbone.RelatedPersonCommunication(data);
    case 'GroupMember':
      return new backbone.GroupMember(data);
    case 'GroupCharacteristic':
      return new backbone.GroupCharacteristic(data);
    case 'LocationHoursOfOperation':
      return new backbone.LocationHoursOfOperation(data);
    case 'LocationPosition':
      return new backbone.LocationPosition(data);
    case 'BundleEntryRequest':
      return new backbone.BundleEntryRequest(data);
    case 'BundleEntryResponse':
      return new backbone.BundleEntryResponse(data);
    case 'BundleEntrySearch':
      return new backbone.BundleEntrySearch(data);
    case 'BundleEntry':
      return new backbone.BundleEntry(data);
    case 'BundleLink':
      return new backbone.BundleLink(data);

    default:
      throw new Error(`BackboneElement ${backboneType} not supported`);
  }
};
