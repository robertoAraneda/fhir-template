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
} from './interfaces/datatypes';
import { IReference } from './interfaces/base';

export type DatatypeTypeR5 =
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
  | 'Reference';

export type DataType<T> = T extends 'Address'
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
  : unknown;
