import * as BackboneBuilder from './builders/backbones';
import {
  BundleEntry,
  BundleEntryRequest,
  BundleEntryResponse,
  BundleEntrySearch,
  BundleLink,
} from './models/backbones';

const OrganizationContact = () => new BackboneBuilder.OrganizationContactBuilder();
const PatientContact = () => new BackboneBuilder.PatientContactBuilder();
const PatientCommunication = () => new BackboneBuilder.PatientCommunicationBuilder();
const PatientLink = () => new BackboneBuilder.PatientLinkBuilder();
const PersonLink = () => new BackboneBuilder.PersonLinkBuilder();
const PractitionerQualification = () => new BackboneBuilder.PractitionerQualificationBuilder();
const PractitionerRoleAvailableTime = () => new BackboneBuilder.PractitionerRoleAvailableTimeBuilder();
const PractitionerRoleNotAvailable = () => new BackboneBuilder.PractitionerRoleNotAvailableBuilder();
const RelatedPersonCommunication = () => new BackboneBuilder.RelatedPersonCommunicationBuilder();
const GroupCharacteristic = () => new BackboneBuilder.GroupCharacteristicBuilder();
const GroupMember = () => new BackboneBuilder.GroupMemberBuilder();
const LocationPosition = () => new BackboneBuilder.LocationPositionBuilder();
const LocationHoursOfOperation = () => new BackboneBuilder.LocationHoursOfOperationBuilder();
const BundleEntrySearchBuilder = () => BundleEntrySearch.builder();
const BundleEntryRequestBuilder = () => BundleEntryRequest.builder();
const BundleEntryResponseBuilder = () => BundleEntryResponse.builder();
const BundleLinkBuilder = () => BundleLink.build();
const BundleEntryBuilder = () => BundleEntry.builder();

export default {
  OrganizationContact,
  PatientContact,
  PatientCommunication,
  PatientLink,
  PersonLink,
  PractitionerQualification,
  PractitionerRoleAvailableTime,
  PractitionerRoleNotAvailable,
  RelatedPersonCommunication,
  GroupMember,
  GroupCharacteristic,
  LocationPosition,
  LocationHoursOfOperation,
  BundleEntryRequest: BundleEntryRequestBuilder,
  BundleEntrySearch: BundleEntrySearchBuilder,
  BundleEntryResponse: BundleEntryResponseBuilder,
  BundleLink: BundleLinkBuilder,
  BundleEntry: BundleEntryBuilder,
};
