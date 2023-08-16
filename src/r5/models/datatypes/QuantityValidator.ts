import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IQuantity } from '../../interfaces/datatypes';
import InvalidFieldException from '../../../globals/exceptions/InvalidFieldException';
import { QuantityComparatorEnum } from '../../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const quantityKeysDefinitions = DataTypeAttributesHelperR5<IQuantity>([
  {
    name: 'value',
    type: 'decimal',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'comparator',
    type: 'code',
    isRequired: false,
    isArray: false,
    enumValues: Object.values(QuantityComparatorEnum),
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
    name: '_value',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_comparator',
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
  {
    name: '_code',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const quantityFields = quantityKeysDefinitions.map((key) => key.name);

function ValidateConstraint(payload: IQuantity, path: string): void {
  // qty-3: If a code for the unit is present, the system SHALL also be present
  if (payload.code && !payload.system) {
    throw new InvalidFieldException(
      path,
      'If a code for the unit is present, the system SHALL also be present (qty-3)',
    );
  }
}

export function QuantityValidator(payload: IQuantity | IQuantity[], path: string = 'Quantity'): void {
  if (Array.isArray(payload)) {
    payload.forEach((p, index) => {
      QuantityValidator(p, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, quantityKeysDefinitions, path);
  ValidateConstraint(payload, path);
}
