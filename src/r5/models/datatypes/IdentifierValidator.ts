import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IIdentifier } from '../../interfaces/datatypes';
import { IdentifierUseEnum } from '../../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const identifierKeyDefinitions = DataTypeAttributesHelperR5<IIdentifier>([
  {
    name: 'use',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: Object.values(IdentifierUseEnum),
  },
  {
    name: 'type',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'value',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'assigner',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: '_use',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_value',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const identifierAttributes = identifierKeyDefinitions.map((key) => key.name);

export function IdentifierValidator(args: IIdentifier | IIdentifier[], path: string = 'Identifier'): void {
  if (Array.isArray(args)) {
    args.forEach((identifier, index) => {
      IdentifierValidator(identifier, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(args, identifierKeyDefinitions, path);
}
