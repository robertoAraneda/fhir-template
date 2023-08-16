import { ISimpleQuantity } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const simpleQuantityKeyDefinitions = DataTypeAttributesHelperR4<ISimpleQuantity>([
  {
    name: 'value',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'unit',
    type: 'string',
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
    name: 'code',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_code',
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
  {
    name: '_unit',
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
]);

export const simpleQuantityFields = simpleQuantityKeyDefinitions.map((item) => item.name);

export function SimpleQuantityValidator(
  payload: ISimpleQuantity | ISimpleQuantity[],
  path: string = 'SimpleQuantity',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      SimpleQuantityValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, simpleQuantityKeyDefinitions, path);
}
