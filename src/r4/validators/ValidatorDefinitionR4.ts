import { ExtensionValidator } from '../models/datatypes/ExtensionValidator';
import { ElementValidator } from '../models/base/ElementValidator';
import { PeriodValidator } from '../models/datatypes/PeriodValidator';
import { AddressValidator } from '../models/datatypes/AddressValidator';
import { ContactPointValidator } from '../models/datatypes/ContactPointValidator';
import { HumanNameValidator } from '../models/datatypes/HumanNameValidator';
import { IdentifierValidator } from '../models/datatypes/IdentifierValidator';
import { ReferenceValidator } from '../models/datatypes/ReferenceValidator';
import { QuantityValidator } from '../models/datatypes/QuantityValidator';
import { RangeValidator } from '../models/datatypes/RangeValidator';
import { CodeableConceptValidator } from '../models/datatypes/CodeableConceptValidator';
import { CodingValidator } from '../models/datatypes/CodingValidator';
import { DurationValidator } from '../models/datatypes/DurationValidator';
import { SimpleQuantityValidator } from '../models/datatypes/SimpleQuantityValidator';
import { SignatureValidator } from '../models/datatypes/SignatureValidator';
import { MetaValidator } from '../models/datatypes/MetaValidator';
import { AttachmentValidator } from '../models/datatypes/AttachmentValidator';
import { ResourceValidator } from '../models/base/ResourceValidator';
import { BundleEntryValidator } from '../models/backbones/BundleEntryValidator';
import { BundleLinkValidator } from '../models/backbones/BundleLinkValidator';
import { BundleEntryRequestValidator } from '../models/backbones/BundleEntryRequestValidator';
import { BundleEntryResponseValidator } from '../models/backbones/BundleEntryResponseValidator';
import { BundleEntrySearchValidator } from '../models/backbones/BundleEntrySearchValidator';
import { NarrativeValidator } from '../models/datatypes/NarrativeValidator';
import { CompositionSectionValidator } from '../models/backbones/CompositionSectionValidator';
import { CompositionAttesterValidator } from '../models/backbones/CompositionAttesterValidator';
import { CompositionRelatesToValidator } from '../models/backbones/CompositionRelatesToValidator';
import { CompositionEventValidator } from '../models/backbones/CompositionEventValidator';
import { GroupCharacteristicValidator } from '../models/backbones/GroupCharacteristicValidator';
import { GroupMemberValidator } from '../models/backbones/GroupMemberValidator';
import { LocationPositionValidator } from '../models/backbones/LocationPositionValidator';
import { LocationHoursOfOperationValidator } from '../models/backbones/LocationHoursOfOperationValidator';
import { OrganizationContactValidator } from '../models/backbones/OrganizationContactValidator';
import { PatientContactValidator } from '../models/backbones/PatientContactValidator';
import { PatientCommunicationValidator } from '../models/backbones/PatientCommunicationValidator';
import { PatientLinkValidator } from '../models/backbones/PatientLinkValidator';
import { PersonLinkValidator } from '../models/backbones/PersonLinkValidator';
import { PractitionerQualificationValidator } from '../models/backbones/PractitionerQualificationValidator';
import { PractitionerRoleAvailableTimeValidator } from '../models/backbones/PractitionerRoleAvailableTimeValidator';
import { PractitionerRoleNotAvailableValidator } from '../models/backbones/PractitionerRoleNotAvailableValidator';
import { RelatedPersonCommunicationValidator } from '../models/backbones/RelatedPersonCommunicationValidator';
import { PatientValidator } from '../models/resources/PatientValidator';
import { BundleValidator } from '../models/resources/BundleValidator';
import { CompositionValidator } from '../models/resources/CompositionValidator';
import { LocationValidator } from '../models/resources/LocationValidator';
import { OrganizationValidator } from '../models/resources/OrganizationValidator';
import { GroupValidator } from '../models/resources/GroupValidator';
import { RelatedPersonValidator } from '../models/resources/RelatedPersonValidator';
import { PractitionerRoleValidator } from '../models/resources/PractitionerRoleValidator';
import { PractitionerValidator } from '../models/resources/PractitionerValidator';

const Base64BinaryValidator = (value: string, path: string) => {
  // regex for /^(\s*([0-9a-zA-Z\+\=]){4}\s*)+$/
  const regex = /^(\s*([0-9a-zA-Z\+\=]){4}\s*)+$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid base64Binary: ${value} at path: ${path}`);
  }
};

const BooleanValidator = (value: string, path: string) => {
  // regex for ^true|false$
  const regex = /^true|false$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid boolean: ${value} at path: ${path}`);
  }
};

const CanonicalValidator = (value: string, path: string) => {
  // regex for ^\\S*$
  const regex = /^\S*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid canonical: ${value} at path: ${path}`);
  }
};

const CodeValidator = (value: string, path: string) => {
  // regex for ^[^\\s]+(\\s[^\\s]+)*$
  const regex = /^[^\s]+(\s[^\s]+)*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid code: ${value} at path: ${path}`);
  }
};

const DateValidator = (value: string, path: string) => {
  // regex for ^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$
  const regex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid date: ${value} at path: ${path}`);
  }
};

const DateTimeValidator = (value: string, path: string) => {
  // regex for ^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$
  const regex =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid dateTime: ${value} at path: ${path}`);
  }
};

const DecimalValidator = (value: number, path: string) => {
  // regex for ^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$
  const regex = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid decimal: ${value} at path: ${path}`);
  }
};

const IdValidator = (value: string, path: string) => {
  // regex for ^[A-Za-z0-9\\-\\.]{1,64}$
  const regex = /^[A-Za-z0-9\-\.]{1,64}$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid id: ${value} at path: ${path}`);
  }
};

const InstantValidator = (value: string, path: string) => {
  // regex for ^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$
  const regex =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid instant: ${value} at path: ${path}`);
  }
};

const IntegerValidator = (value: number, path: string) => {
  // regex for ^-?([0]|([1-9][0-9]*))$
  const regex = /^-?([0]|([1-9][0-9]*))$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid integer: ${value} at path: ${path}`);
  }

  const minValue = -2147483648;
  const maxValue = 2147483647;
  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid integer: ${value} at path: ${path}`);
  }
};

const Integer64Validator = (value: number, path: string) => {
  // regex for ^-?([0]|([1-9][0-9]*))$
  const regex = /^-?([0]|([1-9][0-9]*))$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid integer64: ${value} at path: ${path}`);
  }

  const minValue = -9223372036854775808;
  const maxValue = 9223372036854775807;
  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid integer64: ${value} at path: ${path}`);
  }
};

const MarkdownValidator = (value: string, path: string) => {
  // regex for ^[ \\r\\n\\t\\S]+$
  const regex = /^[ \r\n\t\S]+$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid markdown: ${value} at path: ${path}`);
  }
};

const OidValidator = (value: string, path: string) => {
  // regex for ^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$
  const regex = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid oid: ${value} at path: ${path}`);
  }
};

const StringValidator = (value: string, path: string) => {
  // regex for ^[ \\r\\n\\t\\S]+$
  const regex = /^[ \r\n\t\S]+$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid string: ${value} at path: ${path}`);
  }
};

const PositiveIntValidator = (value: number, path: string) => {
  // regex for ^[1-9][0-9]*$
  const regex = /^[1-9][0-9]*$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid positiveInt: ${value} at path: ${path}`);
  }

  const minValue = 1;
  const maxValue = 2147483647;
  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid positiveInt: ${value} at path: ${path}`);
  }
};

const TimeValidator = (value: string, path: string) => {
  // regex for ^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$
  const regex = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid time: ${value} at path: ${path}`);
  }
};

const UnsignedIntValidator = (value: number, path: string) => {
  // regex for ^[0]|([1-9][0-9]*)$
  const regex = /^[0]|([1-9][0-9]*)$/;
  if (!regex.test(value.toString())) {
    throw new Error(`Invalid unsignedInt: ${value} at path: ${path}`);
  }

  const minValue = 0;
  const maxValue = 2147483647;

  if (value < minValue || value > maxValue) {
    throw new Error(`Invalid unsignedInt: ${value} at path: ${path}`);
  }
};

const UriValidator = (value: string, path: string) => {
  // regex for ^\\S*$
  const regex = /^\S*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid uri: ${value} at path: ${path}`);
  }
};

const UrlValidator = (value: string, path: string) => {
  // regex for ^\\S*$
  const regex = /^\S*$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid url: ${value} at path: ${path}`);
  }
};

const UuidValidator = (value: string, path: string) => {
  // regex for ^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
  const regex = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  if (!regex.test(value)) {
    throw new Error(`Invalid uuid: ${value} at path: ${path}`);
  }
};

// const XhtmlValidator = (value: string, path: string) => {};

export type ValidatorType = {
  base64Binary: typeof Base64BinaryValidator;
  boolean: typeof BooleanValidator;
  canonical: typeof CanonicalValidator;
  code: typeof CodeValidator;
  date: typeof DateValidator;
  dateTime: typeof DateTimeValidator;
  decimal: typeof DecimalValidator;
  id: typeof IdValidator;
  instant: typeof InstantValidator;
  integer: typeof IntegerValidator;
  integer64: typeof Integer64Validator;
  markdown: typeof MarkdownValidator;
  oid: typeof OidValidator;
  positiveInt: typeof PositiveIntValidator;
  string: typeof StringValidator;
  time: typeof TimeValidator;
  unsignedInt: typeof UnsignedIntValidator;
  uri: typeof UriValidator;
  url: typeof UrlValidator;
  uuid: typeof UuidValidator;
  Extension: typeof ExtensionValidator;
  Element: typeof ElementValidator;
  Period: typeof PeriodValidator;
  Address: typeof AddressValidator;
  ContactPoint: typeof ContactPointValidator;
  HumanName: typeof HumanNameValidator;
  Identifier: typeof IdentifierValidator;
  Reference: typeof ReferenceValidator;
  Quantity: typeof QuantityValidator;
  Range: typeof RangeValidator;
  Attachment: typeof AttachmentValidator;
  CodeableConcept: typeof CodeableConceptValidator;
  Coding: typeof CodingValidator;
  Duration: typeof DurationValidator;
  SimpleQuantity: typeof SimpleQuantityValidator;
  Signature: typeof SignatureValidator;
  Meta: typeof MetaValidator;
  Narrative: typeof NarrativeValidator;
  Resource: typeof ResourceValidator;
  BundleEntry: typeof BundleEntryValidator;
  BundleLink: typeof BundleLinkValidator;
  BundleEntryRequest: typeof BundleEntryRequestValidator;
  BundleEntryResponse: typeof BundleEntryResponseValidator;
  BundleEntrySearch: typeof BundleEntrySearchValidator;
  CompositionSection: typeof CompositionSectionValidator;
  CompositionAttester: typeof CompositionAttesterValidator;
  CompositionRelatesTo: typeof CompositionRelatesToValidator;
  CompositionEvent: typeof CompositionEventValidator;
  GroupCharacteristic: typeof GroupCharacteristicValidator;
  GroupMember: typeof GroupMemberValidator;
  LocationPosition: typeof LocationPositionValidator;
  LocationHoursOfOperation: typeof LocationHoursOfOperationValidator;
  OrganizationContact: typeof OrganizationContactValidator;
  PatientContact: typeof PatientContactValidator;
  PatientCommunication: typeof PatientCommunicationValidator;
  PatientLink: typeof PatientLinkValidator;
  PersonLink: typeof PersonLinkValidator;
  PractitionerQualification: typeof PractitionerQualificationValidator;
  PractitionerRoleAvailableTime: typeof PractitionerRoleAvailableTimeValidator;
  PractitionerRoleNotAvailable: typeof PractitionerRoleNotAvailableValidator;
  RelatedPersonCommunication: typeof RelatedPersonCommunicationValidator;

  // Resources
  Patient: typeof PatientValidator;
  Practitioner: typeof PractitionerValidator;
  PractitionerRole: typeof PractitionerRoleValidator;
  RelatedPerson: typeof RelatedPersonValidator;
  Group: typeof GroupValidator;
  Organization: typeof OrganizationValidator;
  Location: typeof LocationValidator;
  Composition: typeof CompositionValidator;
  Bundle: typeof BundleValidator;
  _Bundle: typeof BundleValidator;
};

export const Validator: ValidatorType = {
  base64Binary: Base64BinaryValidator,
  boolean: BooleanValidator,
  canonical: CanonicalValidator,
  code: CodeValidator,
  date: DateValidator,
  dateTime: DateTimeValidator,
  decimal: DecimalValidator,
  id: IdValidator,
  instant: InstantValidator,
  integer: IntegerValidator,
  integer64: Integer64Validator,
  markdown: MarkdownValidator,
  oid: OidValidator,
  positiveInt: PositiveIntValidator,
  time: TimeValidator,
  unsignedInt: UnsignedIntValidator,
  uuid: UuidValidator,
  uri: UriValidator,
  url: UrlValidator,
  string: StringValidator,
  Extension: ExtensionValidator,
  Element: ElementValidator,
  Period: PeriodValidator,
  Address: (data, path) => AddressValidator(data, path),
  ContactPoint: ContactPointValidator,
  HumanName: HumanNameValidator,
  Identifier: IdentifierValidator,
  Reference: ReferenceValidator,
  Quantity: QuantityValidator,
  Range: RangeValidator,
  Attachment: AttachmentValidator,
  CodeableConcept: CodeableConceptValidator,
  Coding: CodingValidator,
  Meta: MetaValidator,
  Duration: DurationValidator,
  Signature: SignatureValidator,
  SimpleQuantity: SimpleQuantityValidator,
  Narrative: NarrativeValidator,
  Resource: ResourceValidator,
  BundleEntryRequest: BundleEntryRequestValidator,
  BundleEntryResponse: BundleEntryResponseValidator,
  BundleEntrySearch: BundleEntrySearchValidator,
  BundleEntry: BundleEntryValidator,
  BundleLink: BundleLinkValidator,
  CompositionSection: CompositionSectionValidator,
  CompositionAttester: CompositionAttesterValidator,
  CompositionEvent: CompositionEventValidator,
  CompositionRelatesTo: CompositionRelatesToValidator,
  GroupCharacteristic: GroupCharacteristicValidator,
  GroupMember: GroupMemberValidator,
  LocationPosition: LocationPositionValidator,
  LocationHoursOfOperation: LocationHoursOfOperationValidator,
  OrganizationContact: OrganizationContactValidator,
  PatientContact: PatientContactValidator,
  PatientCommunication: PatientCommunicationValidator,
  PatientLink: PatientLinkValidator,
  PersonLink: PersonLinkValidator,
  PractitionerQualification: PractitionerQualificationValidator,
  PractitionerRoleAvailableTime: PractitionerRoleAvailableTimeValidator,
  PractitionerRoleNotAvailable: PractitionerRoleNotAvailableValidator,
  RelatedPersonCommunication: RelatedPersonCommunicationValidator,

  // Resources
  PractitionerRole: PractitionerRoleValidator,
  Patient: PatientValidator,
  Practitioner: PractitionerValidator,
  RelatedPerson: RelatedPersonValidator,
  Group: GroupValidator,
  Organization: OrganizationValidator,
  Location: LocationValidator,
  Composition: CompositionValidator,
  Bundle: (data, path) => BundleValidator(data, path),
  _Bundle: () => BundleValidator,
};
