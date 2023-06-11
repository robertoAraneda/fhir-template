import {
  IAddress,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IDuration,
  IExtension,
  IHumanName,
  IIdentifier,
  IMeta,
  IPeriod,
  IQuantity,
} from './interfaces/datatypes';
import { Wait } from './validators/BackboneElementValidator';
export interface IDatatypeValidatorProperties {
  Address: (data: unknown) => Wait;
  Attachment: (data: unknown) => Wait;
  CodeableConcept: (data: unknown) => Wait;
  Coding: (data: unknown) => Wait;
  ContactPoint: (data: unknown) => Wait;
  HumanName: (data: unknown) => Wait;
  Identifier: (data: unknown) => Wait;
  Meta: (data: unknown) => Wait;
  Period: (data: unknown) => Wait;
  Reference: (data: unknown) => Wait;
  Duration: (data: unknown) => Wait;
  Quantity: (data: unknown) => Wait;
}

export type DatatypeTypeR4 =
  | 'Address'
  | 'Attachment'
  | 'CodeableConcept'
  | 'Coding'
  | 'ContactPoint'
  | 'HumanName'
  | 'Identifier'
  | 'Meta'
  | 'Period'
  | 'Duration'
  | 'Extension'
  | 'Quantity'
  | 'Reference';

export type ParseDataTypeR4<T> = T extends 'Address'
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
  : T extends 'Duration'
  ? IDuration
  : T extends 'Extension'
  ? IExtension
  : T extends 'Quantity'
  ? IQuantity
  : unknown;
