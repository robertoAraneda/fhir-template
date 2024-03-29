import {
  Address,
  Availability,
  Attachment,
  CodeableConcept,
  CodeableReference,
  ExtendedContactDetail,
  Coding,
  VirtualServiceDetail,
  ContactPoint,
  Duration,
  Extension,
  HumanName,
  Identifier,
  Meta,
  Period,
  Quantity,
  Range,
  Reference,
  SimpleQuantity,
  Signature,
  NotAvailableTime,
  AvailableTime,
  RelatedArtifact,
} from './models/datatypes';

import {
  Bundle,
  Endpoint,
  Group,
  Location,
  Organization,
  Patient,
  Person,
  Practitioner,
  PractitionerRole,
  RelatedPerson,
  Composition,
} from './models/resources';

import {
  BundleLink,
  BundleEntrySearch,
  BundleEntryResponse,
  BundleEntryRequest,
  BundleEntry,
  EndpointPayload,
  GroupCharacteristic,
  GroupMember,
  LocationPosition,
  PatientCommunication,
  PatientContact,
  PatientLink,
  PersonLink,
  PersonCommunication,
  PractitionerQualification,
  PractitionerCommunication,
  RelatedPersonCommunication,
  OrganizationQualification,
  CompositionAttester,
  CompositionEvent,
  CompositionSection,
} from './models/backbones';

import { PatientValidator } from './models/resources/PatientValidator';

export class FhirContextR5 {
  getInstances() {
    return {
      Address,
      Availability,
      Attachment,
      CodeableConcept,
      CodeableReference,
      ExtendedContactDetail,
      Coding,
      ContactPoint,
      Duration,
      Extension,
      HumanName,
      Identifier,
      Meta,
      Period,
      Quantity,
      Range,
      Reference,
      SimpleQuantity,
      Signature,
      VirtualServiceDetail,
      NotAvailableTime,
      AvailableTime,
      RelatedArtifact,
      Bundle,
      BundleEntry,
      BundleEntryRequest,
      BundleEntryResponse,
      BundleEntrySearch,
      BundleLink,
      CompositionAttester,
      CompositionEvent,
      CompositionSection,
      Composition,
      Endpoint,
      EndpointPayload,
      Group,
      GroupMember,
      GroupCharacteristic,
      Location,
      LocationPosition,
      Organization,
      OrganizationQualification,
      Patient,
      PatientCommunication,
      PatientContact,
      PatientLink,
      Person,
      PersonLink,
      PersonCommunication,
      Practitioner,
      PractitionerQualification,
      PractitionerCommunication,
      PractitionerRole,
      RelatedPerson,
      RelatedPersonCommunication,
    };
  }

  public getValidator() {
    return {
      PatientValidator,
    };
  }
}
