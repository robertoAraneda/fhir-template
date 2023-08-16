import { IRange } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import ConstraintException from '../../../globals/exceptions/ConstraintException';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';
export const rangeKeysDefinitions = DataTypeAttributesHelperR4<IRange>([
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

  ValidatorHelperR4(payload, rangeKeysDefinitions, path);
}
