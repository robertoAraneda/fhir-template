import { ILocationHoursOfOperation } from '../../interfaces/backbones';
import { DaysOfWeekEnum } from '../../../enums';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export interface FieldDefinition {
  name: string;
  type: string;
  isArray: boolean;
  isRequired: boolean;
  enum: string[];
}

export const locationHoursOfOperationKeysDefinitions = BackboneAttributesHelperR4<ILocationHoursOfOperation>([
  {
    name: 'daysOfWeek',
    type: 'code',
    isArray: true,
    isRequired: false,
    enumValues: Object.values(DaysOfWeekEnum),
  },
  {
    name: 'allDay',
    type: 'boolean',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'openingTime',
    type: 'time',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'closingTime',
    type: 'time',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_daysOfWeek',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_allDay',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_openingTime',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_closingTime',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const locationHoursOfOperationFields = locationHoursOfOperationKeysDefinitions.map((item) => item.name);

export function LocationHoursOfOperationValidator(
  payload: ILocationHoursOfOperation | ILocationHoursOfOperation[],
  path: string = 'LocationHoursOfOperation',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      LocationHoursOfOperationValidator(item, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR4(payload, locationHoursOfOperationKeysDefinitions, path);
}
