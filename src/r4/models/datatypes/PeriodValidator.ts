import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPeriod } from '../../interfaces/datatypes';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';
export const periodKeysDefinitions = DataTypeAttributesHelperR4<IPeriod>([
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

  ValidatorHelperR4(payload, periodKeysDefinitions, path);
}
