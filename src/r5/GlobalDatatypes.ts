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
import { Wait } from './validators/BackboneElementValidator';
export interface IDatatypeValidatorProperties {
  Address: (data: unknown) => Wait;
  Attachment: (data: unknown) => Wait;
  CodeableConcept: (data: unknown) => Wait;
  CodeableReference: (data: unknown) => Wait;
  Coding: (data: unknown) => Wait;
  ContactPoint: (data: unknown) => Wait;
  HumanName: (data: unknown) => Wait;
  Identifier: (data: unknown) => Wait;
  Meta: (data: unknown) => Wait;
  Period: (data: unknown) => Wait;
  Reference: (data: unknown) => Wait;
  Availability: (data: unknown) => Wait;
  Duration: (data: unknown) => Wait;
  ExtendedContactDetail: (data: unknown) => Wait;
  Quantity: (data: unknown) => Wait;
  VirtualServiceDetail: (data: unknown) => Wait;
  Range: (data: unknown) => Wait;
  SimpleQuantity: (data: unknown) => Wait;
}

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
