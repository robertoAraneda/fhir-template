import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IAvailability } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const availabilityKeysDefinitions = DataTypeAttributesHelperR5<IAvailability>([
  {
    name: 'availableTime',
    type: 'AvailableTime',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'notAvailableTime',
    type: 'NotAvailableTime',
    isArray: true,
    isRequired: false,
  },
]);
export const AvailabilityValidator = (
  availabilities: IAvailability | IAvailability[],
  path: string = 'IAvailability',
): void => {
  if (Array.isArray(availabilities)) {
    availabilities.forEach((availability, index) => {
      AvailabilityValidator(availability, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(availabilities, availabilityKeysDefinitions, path);
};
