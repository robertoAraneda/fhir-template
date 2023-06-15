import { _validateDataType } from './BaseValidator';
import { IValidateProperties } from '../../globals/interfaces';

type Wait = Promise<IValidateProperties>;

const Address = async (item: unknown): Wait => _validateDataType(item, 'Address');
const Attachment = async (item: unknown): Wait => _validateDataType(item, 'Attachment');
const CodeableConcept = async (item: unknown): Wait => _validateDataType(item, 'CodeableConcept');
const Coding = async (item: unknown): Wait => _validateDataType(item, 'Coding');
const ContactPoint = async (item: unknown): Wait => _validateDataType(item, 'ContactPoint');
const HumanName = async (item: unknown): Wait => _validateDataType(item, 'HumanName');
const Identifier = async (item: unknown): Wait => _validateDataType(item, 'Identifier');
const Meta = async (item: unknown): Wait => _validateDataType(item, 'Meta');
const Period = async (item: unknown): Wait => _validateDataType(item, 'Period');
const Reference = async (item: unknown): Wait => _validateDataType(item, 'Reference');
const Duration = async (item: unknown): Wait => _validateDataType(item, 'Duration');
const Extension = async (item: unknown): Wait => _validateDataType(item, 'Extension');
const Quantity = async (item: unknown): Wait => _validateDataType(item, 'Quantity');
const Range = async (item: unknown): Wait => _validateDataType(item, 'Range');
const Ratio = async (item: unknown): Wait => _validateDataType(item, 'Ratio');
const SimpleQuantity = async (item: unknown): Wait => _validateDataType(item, 'SimpleQuantity');

export const DataTypesValidator = {
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
};
