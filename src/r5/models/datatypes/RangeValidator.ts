import { IRange } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const rangeKeysDefinitions = DataTypeAttributesHelperR5<IRange>([
  {
    name: 'low',
    type: 'Quantity',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'high',
    type: 'Quantity',
    isRequired: false,
    isArray: false,
  },
]);

export const rangeFields = rangeKeysDefinitions.map((key) => key.name);

function ValidateConstraint(payload: IRange, path: string = 'Range'): void {
  // TODO: Implement this
  // rng-2: If present, low SHALL have a lower value than high.

  if (payload.low?.value && payload.high?.value && payload.low.value > payload.high.value) {
    throw new ConstraintException(path, 'rng-2: If present, low SHALL have a lower value than high.');
  }
}

export function RangeValidator(payload: IRange | IRange[], path: string = 'Range'): void {
  if (Array.isArray(payload)) {
    payload.forEach((entry, index) => {
      ValidateConstraint(entry, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(payload, rangeKeysDefinitions, path);
}
