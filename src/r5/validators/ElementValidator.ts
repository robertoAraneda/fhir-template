import { _validateDataType } from './BaseValidator';
import { IValidateProperties } from '../interfaces/IValidateProperties';

type Wait = Promise<IValidateProperties>;

export const Address = async (item: unknown): Wait => _validateDataType(item, 'Address');
export const Attachment = async (item: unknown): Wait => _validateDataType(item, 'Attachment');
export const Coding = async (item: unknown): Wait => _validateDataType(item, 'Coding');
export const ContactPoint = async (item: unknown): Wait => _validateDataType(item, 'ContactPoint');
export const HumanName = async (item: unknown): Wait => _validateDataType(item, 'HumanName');
export const Identifier = async (item: unknown): Wait => _validateDataType(item, 'Identifier');
export const Meta = async (item: unknown): Wait => _validateDataType(item, 'Meta');
export const Period = async (item: unknown): Wait => _validateDataType(item, 'Period');
export const Reference = async (item: unknown): Wait => _validateDataType(item, 'Reference');
export const Availability = async (item: unknown): Wait => _validateDataType(item, 'Availability');
export const CodeableReference = async (item: unknown): Wait => _validateDataType(item, 'CodeableReference');
export const CodeableConcept = async (item: unknown): Wait => _validateDataType(item, 'CodeableConcept');
export const Duration = async (item: unknown): Wait => _validateDataType(item, 'Duration');
export const ExtendedContactDetail = async (item: unknown): Wait => _validateDataType(item, 'ExtendedContactDetail');
export const Extension = async (item: unknown): Wait => _validateDataType(item, 'Extension');
export const Quantity = async (item: unknown): Wait => _validateDataType(item, 'Quantity');
export const VirtualServiceDetail = async (item: unknown): Wait => _validateDataType(item, 'VirtualServiceDetail');
export const SimpleQuantity = async (item: unknown): Wait => _validateDataType(item, 'SimpleQuantity');
export const Range = async (item: unknown): Wait => _validateDataType(item, 'Range');
