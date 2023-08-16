import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { INarrative } from '../../interfaces/datatypes';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const narrativeKeysDefinitions = DataTypeAttributesHelperR4<INarrative>([
  {
    name: 'status',
    type: 'code',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'div',
    type: 'string',
    isRequired: true,
    isArray: false,
  },
]);
export const narrativeKeys = narrativeKeysDefinitions.map((key) => key.name);

export function NarrativeValidator(payload: INarrative | INarrative[], path: string = 'Narrative') {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      NarrativeValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, narrativeKeysDefinitions, path);
}
