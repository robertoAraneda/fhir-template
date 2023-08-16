import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPeriod } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const periodKeysDefinitions = DataTypeAttributesHelperR5<IPeriod>([
  {
    name: 'start',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'end',
    type: 'dateTime',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_start',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_end',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const periodFields = periodKeysDefinitions.map((key) => key.name);

export function PeriodValidator(payload: IPeriod | IPeriod[], path: string = 'Period'): void {
  if (Array.isArray(payload)) {
    payload.forEach((period, index) => {
      PeriodValidator(period, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, periodKeysDefinitions, path);
}
