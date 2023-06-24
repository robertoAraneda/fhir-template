import ResourceValidator from './validators/ResourceValidator';
import {
  Address,
  Attachment,
  CodeableConcept,
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
  Signature,
  SimpleQuantity,
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
  BundleEntry,
  BundleEntryRequest,
  BundleEntryResponse,
  BundleEntrySearch,
  BundleLink,
  GroupCharacteristic,
  GroupMember,
  LocationHoursOfOperation,
  LocationPosition,
  OrganizationContact,
  PatientCommunication,
  PatientContact,
  PatientLink,
  PersonLink,
  PractitionerQualification,
  PractitionerRoleAvailableTime,
  PractitionerRoleNotAvailable,
  RelatedPersonCommunication,
  CompositionAttester,
  CompositionEvent,
  CompositionRelatesTo,
  CompositionSection,
} from './models/backbones';

export class FhirContextR4 {
  getInstances() {
    return {
      Address,
      Attachment,
      CodeableConcept,
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
      Signature,
      SimpleQuantity,
      Bundle,
      BundleEntry,
      BundleLink,
      BundleEntrySearch,
      BundleEntryRequest,
      BundleEntryResponse,
      Composition,
      CompositionAttester,
      CompositionEvent,
      CompositionRelatesTo,
      CompositionSection,
      Endpoint,
      Group,
      GroupMember,
      GroupCharacteristic,
      Location,
      LocationPosition,
      LocationHoursOfOperation,
      Organization,
      OrganizationContact,
      Patient,
      PatientCommunication,
      PatientContact,
      PatientLink,
      Person,
      PersonLink,
      Practitioner,
      PractitionerQualification,
      PractitionerRole,
      PractitionerRoleAvailableTime,
      PractitionerRoleNotAvailable,
      RelatedPerson,
      RelatedPersonCommunication,
    };
  }

  public getValidator() {
    return {
      ...ResourceValidator,
    };
  }
}
