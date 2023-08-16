import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IAvailableTime } from '../../interfaces/datatypes';
import { DaysOfWeekEnum } from '../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const availableTimeFieldsDefinitions = DataTypeAttributesHelperR5<IAvailableTime>([
  {
    name: 'daysOfWeek',
    type: 'code',
    isRequired: false,
    isArray: true,
    enumValues: Object.values(DaysOfWeekEnum),
  },
  {
    name: 'allDay',
    type: 'boolean',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'availableStartTime',
    type: 'time',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'availableEndTime',
    type: 'time',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_daysOfWeek',
    type: 'Element',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_allDay',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_availableStartTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_availableEndTime',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export function AvailableTimeValidator(payload: IAvailableTime | IAvailableTime[], path: string = 'AvailableTime') {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      AvailableTimeValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, availableTimeFieldsDefinitions, path);
}
