import { IExtendedContactDetail } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';

export const extendedContactDetailKeysDefinitions = DataTypeAttributesHelperR5<IExtendedContactDetail>([
  {
    name: 'purpose',
    type: 'CodeableConcept',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'name',
    type: 'HumanName',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'telecom',
    type: 'ContactPoint',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'address',
    type: 'Address',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'organization',
    type: 'Reference',
    isArray: false,
    isRequired: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'period',
    type: 'Period',
    isArray: false,
    isRequired: false,
  },
]);

export function ExtendedContactDetailValidator(
  payload: IExtendedContactDetail | IExtendedContactDetail[],
  path: string = 'ExtendedContactDetail',
) {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      ExtendedContactDetailValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, extendedContactDetailKeysDefinitions, path);
}
