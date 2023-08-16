import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { INotAvailableTime } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const notAvailableTimeFieldsDefinitions = DataTypeAttributesHelperR5<INotAvailableTime>([
  {
    name: 'description',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'during',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_description',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export function NotAvailableTimeValidator(
  notAvailableTime: INotAvailableTime | INotAvailableTime[],
  path: string = 'NotAvailableTime',
): void {
  if (Array.isArray(notAvailableTime)) {
    notAvailableTime.forEach((item, index) => {
      NotAvailableTimeValidator(item, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(notAvailableTime, notAvailableTimeFieldsDefinitions, path);
}
