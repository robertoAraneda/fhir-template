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
      Address: Address,
      Attachment: Attachment,
      CodeableConcept: CodeableConcept,
      Coding: Coding,
      ContactPoint: ContactPoint,
      Duration: Duration,
      Extension: Extension,
      HumanName: HumanName,
      Identifier: Identifier,
      Meta: Meta,
      Period: Period,
      Quantity: Quantity,
      Range: Range,
      Reference: Reference,
      Signature: Signature,
      SimpleQuantity: SimpleQuantity,
      Bundle: Bundle,
      BundleEntry: BundleEntry,
      BundleLink: BundleLink,
      BundleEntrySearch: BundleEntrySearch,
      BundleEntryRequest: BundleEntryRequest,
      BundleEntryResponse: BundleEntryResponse,
      Endpoint: Endpoint,
      Group: Group,
      GroupMember: GroupMember,
      GroupCharacteristic: GroupCharacteristic,
      Location: Location,
      LocationPosition: LocationPosition,
      LocationHoursOfOperation: LocationHoursOfOperation,
      Organization: Organization,
      OrganizationContact: OrganizationContact,
      Patient: Patient,
      PatientCommunication: PatientCommunication,
      PatientContact: PatientContact,
      PatientLink: PatientLink,
      Person: Person,
      PersonLink: PersonLink,
      Practitioner: Practitioner,
      PractitionerQualification: PractitionerQualification,
      PractitionerRole: PractitionerRole,
      PractitionerRoleAvailableTime: PractitionerRoleAvailableTime,
      PractitionerRoleNotAvailable: PractitionerRoleNotAvailable,
      RelatedPerson: RelatedPerson,
      RelatedPersonCommunication: RelatedPersonCommunication,
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
