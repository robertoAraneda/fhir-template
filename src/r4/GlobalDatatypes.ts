import * as datatype from './interfaces/datatypes';
import { Wait } from './validators/BackboneElementValidator';

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
  | 'Range'
  | 'SimpleQuantity'
  | 'Signature'
  | 'Reference';

export type ParseDataTypeR4<T> = T extends 'Address'
  ? datatype.IAddress
  : T extends 'Attachment'
  ? datatype.IAttachment
  : T extends 'CodeableConcept'
  ? datatype.ICodeableConcept
  : T extends 'Coding'
  ? datatype.ICoding
  : T extends 'ContactPoint'
  ? datatype.IContactPoint
  : T extends 'HumanName'
  ? datatype.IHumanName
  : T extends 'Identifier'
  ? datatype.IIdentifier
  : T extends 'Meta'
  ? datatype.IMeta
  : T extends 'Period'
  ? datatype.IPeriod
  : T extends 'Duration'
  ? datatype.IDuration
  : T extends 'Extension'
  ? datatype.IExtension
  : T extends 'Reference'
  ? datatype.IReference
  : T extends 'Quantity'
  ? datatype.IQuantity
  : T extends 'Range'
  ? datatype.IRange
  : T extends 'SimpleQuantity'
  ? datatype.ISimpleQuantity
  : T extends 'Signature'
  ? datatype.ISignature
  : unknown;
