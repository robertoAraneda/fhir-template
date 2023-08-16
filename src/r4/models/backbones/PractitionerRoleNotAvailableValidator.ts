import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IPractitionerRoleNotAvailable } from '../../interfaces/backbones';
import { PeriodValidator } from '../datatypes/PeriodValidator';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const practitionerRoleNotAvailableKeysDefinitions = BackboneAttributesHelperR4<IPractitionerRoleNotAvailable>([
  {
    name: 'description',
    type: 'string',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'during',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_description',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const practitionerRoleNotAvailableFields = practitionerRoleNotAvailableKeysDefinitions.map((item) => item.name);

export function PractitionerRoleNotAvailableValidator(
  payload: IPractitionerRoleNotAvailable | IPractitionerRoleNotAvailable[],
  path: string = 'PractitionerRoleNotAvailable',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      PractitionerRoleNotAvailableValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, practitionerRoleNotAvailableKeysDefinitions, path);
}
