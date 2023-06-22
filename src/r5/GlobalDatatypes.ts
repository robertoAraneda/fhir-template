import {
  IAddress,
  IAttachment,
  IAvailability,
  ICodeableConcept,
  ICodeableReference,
  ICoding,
  IContactPoint,
  IDuration,
  IExtendedContactDetail,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
  ISimpleQuantity,
  IVirtualServiceDetail,
} from './interfaces/datatypes';

export type DataTypeR5 =
  | 'Address'
  | 'Attachment'
  | 'CodeableConcept'
  | 'Coding'
  | 'ContactPoint'
  | 'HumanName'
  | 'Identifier'
  | 'Meta'
  | 'Period'
  | 'Availability'
  | 'CodeableReference'
  | 'Duration'
  | 'Extension'
  | 'ExtendedContactDetail'
  | 'Quantity'
  | 'VirtualServiceDetail'
  | 'Range'
  | 'SimpleQuantity'
  | 'Reference';

export type ParseDataTypeR5<T> = T extends 'Address'
  ? IAddress
  : T extends 'Attachment'
  ? IAttachment
  : T extends 'CodeableConcept'
  ? ICodeableConcept
  : T extends 'Coding'
  ? ICoding
  : T extends 'ContactPoint'
  ? IContactPoint
  : T extends 'HumanName'
  ? IHumanName
  : T extends 'Identifier'
  ? IIdentifier
  : T extends 'Meta'
  ? IMeta
  : T extends 'Period'
  ? IPeriod
  : T extends 'Reference'
  ? IReference
  : T extends 'Availability'
  ? IAvailability
  : T extends 'CodeableReference'
  ? ICodeableReference
  : T extends 'Duration'
  ? IDuration
  : T extends 'ExtendedContactDetail'
  ? IExtendedContactDetail
  : T extends 'Extension'
  ? IExtension
  : T extends 'Quantity'
  ? IQuantity
  : T extends 'VirtualServiceDetail'
  ? IVirtualServiceDetail
  : T extends 'Range'
  ? IRange
  : T extends 'SimpleQuantity'
  ? ISimpleQuantity
  : unknown;
