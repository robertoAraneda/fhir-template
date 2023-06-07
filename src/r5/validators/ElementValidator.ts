import { _validateDataType } from './BaseValidator';
import { IValidateProperties } from '../interfaces/IValidateProperties';

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
const Availability = async (item: unknown): Wait => _validateDataType(item, 'Availability');
const CodeableReference = async (item: unknown): Wait => _validateDataType(item, 'CodeableReference');
const Duration = async (item: unknown): Wait => _validateDataType(item, 'Duration');

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
  Availability,
  CodeableReference,
  Duration,
};
