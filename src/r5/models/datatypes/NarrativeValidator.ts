import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { INarrative } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const narrativeKeysDefinitions = DataTypeAttributesHelperR5<INarrative>([
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

  ValidatorHelperR5(payload, narrativeKeysDefinitions, path);
}
