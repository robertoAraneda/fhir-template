import { ResourceValidator } from './validators/ResourceValidator';
import { ParseDataTypeR4, DatatypeTypeR4 } from './GlobalDatatypes';
import { BackboneElementTypeR4, ParseBackboneElementTypeR4 } from './GlobalBackboneElements';
import { IResourceValidatorProperties, ParseResourceTypeR4, ResourceTypeR4 } from './GlobalResourceTypes';
import { generateInstanceDatatype } from './InstanceBuilderDatatype';
import { generateInstanceResource } from './InstanceBuilderResource';
import { generateInstanceBackboneElement } from './InstanceBuilderBackboneElement';
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
  createResource<T extends ResourceTypeR4>(resourceType: T, data?: ParseResourceTypeR4<T>) {
    return generateInstanceResource(resourceType, data) as ParseResourceTypeR4<T>;
  }

  createDatatype<T extends DatatypeTypeR4>(datatypeType: T, d: ParseDataTypeR4<T>) {
    return generateInstanceDatatype(datatypeType, d) as ParseDataTypeR4<T>;
  }

  createBackboneElement<T extends BackboneElementTypeR4>(backboneType: T, data?: ParseBackboneElementTypeR4<T>) {
    return generateInstanceBackboneElement(backboneType, data) as ParseBackboneElementTypeR4<T>;
  }

  public getValidator(): IResourceValidatorProperties {
    return {
      ...ResourceValidator,
    };
  }
}
