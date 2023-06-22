import { _validateDataType } from './BaseValidator';
import { IValidateProperties } from '../../globals/interfaces';

const Address = (item: unknown): IValidateProperties => _validateDataType(item, 'Address');
const Attachment = (item: unknown): IValidateProperties => _validateDataType(item, 'Attachment');
const CodeableConcept = (item: unknown): IValidateProperties => _validateDataType(item, 'CodeableConcept');
const Coding = (item: unknown): IValidateProperties => _validateDataType(item, 'Coding');
const ContactPoint = (item: unknown): IValidateProperties => _validateDataType(item, 'ContactPoint');
const HumanName = (item: unknown): IValidateProperties => _validateDataType(item, 'HumanName');
const Identifier = (item: unknown): IValidateProperties => _validateDataType(item, 'Identifier');
const Meta = (item: unknown): IValidateProperties => _validateDataType(item, 'Meta');
const Period = (item: unknown): IValidateProperties => _validateDataType(item, 'Period');
const Reference = (item: unknown): IValidateProperties => _validateDataType(item, 'Reference');
const Duration = (item: unknown): IValidateProperties => _validateDataType(item, 'Duration');
const Extension = (item: unknown): IValidateProperties => _validateDataType(item, 'Extension');
const Quantity = (item: unknown): IValidateProperties => _validateDataType(item, 'Quantity');
const Range = (item: unknown): IValidateProperties => _validateDataType(item, 'Range');
const Ratio = (item: unknown): IValidateProperties => _validateDataType(item, 'Ratio');
const SimpleQuantity = (item: unknown): IValidateProperties => _validateDataType(item, 'SimpleQuantity');
const Signature = (item: unknown): IValidateProperties => _validateDataType(item, 'Signature');

export default {
  Address,
  Attachment,
  CodeableConcept,
  Coding,
  ContactPoint,
  HumanName,
  Identifier,
  Meta,
  Period,
  Reference,
  Duration,
  Extension,
  Quantity,
  Range,
  SimpleQuantity,
  Ratio,
  Signature,
};
