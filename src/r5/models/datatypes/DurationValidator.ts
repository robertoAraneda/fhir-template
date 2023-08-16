import { IDuration } from '../../interfaces/datatypes';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { QuantityComparatorEnum } from '../../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const durationKeysDefinitions = DataTypeAttributesHelperR5<IDuration>([
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
    isArray: false,
    isRequired: false,
  },
  {
    name: '_comparator',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_unit',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_system',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_code',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const durationFieldNames = durationKeysDefinitions.map((key) => key.name);

function ValidateConstrain(payload: IDuration, path: string): void {
  // drt-1: There SHALL be a code if there is a value and it SHALL be an expression of time. If system is present, it SHALL be UCUM.
  if (payload.value && !payload.code) {
    throw new ConstraintException(
      path,
      'There SHALL be a code if there is a value and it SHALL be an expression of time. (drt-1)',
    );
  }

  if (payload.system && payload.system !== 'http://unitsofmeasure.org') {
    throw new ConstraintException(path, 'If system is present, it SHALL be UCUM. (drt-1)');
  }
}

export function DurationValidator(payload: IDuration | IDuration[], path: string = 'Duration'): void {
  if (Array.isArray(payload)) {
    payload.forEach((entry, index) => {
      DurationValidator(entry, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, durationKeysDefinitions, path);
  ValidateConstrain(payload, path);
}
