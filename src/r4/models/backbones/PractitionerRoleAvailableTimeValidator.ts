import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { DaysOfWeekEnum } from '../../../enums';
import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const practitionerRoleAvailableTimeKeysDefinitions = BackboneAttributesHelperR4<IPractitionerRoleAvailableTime>([
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
    name: 'availableStartTime',
    type: 'time',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'availableEndTime',
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
    name: '_availableStartTime',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_availableEndTime',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const practitionerRoleAvailableTimeFields = practitionerRoleAvailableTimeKeysDefinitions.map(
  (item) => item.name,
);

export function PractitionerRoleAvailableTimeValidator(
  payload: IPractitionerRoleAvailableTime | IPractitionerRoleAvailableTime[],
  path: string = 'PractitionerRoleAvailableTime',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((practitionerRoleAvailableTime, index) => {
      PractitionerRoleAvailableTimeValidator(practitionerRoleAvailableTime, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR4(payload, practitionerRoleAvailableTimeKeysDefinitions, path);
}
