import { _validateDataType } from './validators/BaseValidator';
import { ValidateProperties } from './interfaces/ValidateProperties';

type Wait = Promise<ValidateProperties>;

const ElementValidator = {
  Address: async (item: unknown): Wait => _validateDataType(item, 'Address'),
  Attachment: async (item: unknown): Wait => _validateDataType(item, 'Attachment'),
  CodeableConcept: async (item: unknown): Wait => _validateDataType(item, 'CodeableConcept'),
  Coding: async (item: unknown): Wait => _validateDataType(item, 'Coding'),
  ContactPoint: async (item: unknown): Wait => _validateDataType(item, 'ContactPoint'),
  HumanName: async (item: unknown): Wait => _validateDataType(item, 'HumanName'),
  Identifier: async (item: unknown): Wait => _validateDataType(item, 'Identifier'),
  Meta: async (item: unknown): Wait => _validateDataType(item, 'Meta'),
  Period: async (item: unknown): Wait => _validateDataType(item, 'Period'),
  Reference: async (item: unknown): Wait => _validateDataType(item, 'Reference'),
};

export default ElementValidator;
