import { IMeta } from '../../interfaces/datatypes';
import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const metaKeyDefinitions = DataTypeAttributesHelperR4<IMeta>([
  {
    name: 'versionId',
    type: 'id',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'lastUpdated',
    type: 'instant',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'source',
    type: 'uri',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'profile',
    type: 'canonical',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'security',
    type: 'Coding',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'tag',
    type: 'Coding',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_versionId',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_lastUpdated',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_source',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_profile',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
]);
export const metaFields = metaKeyDefinitions.map((item) => item.name);

export function MetaValidator(payload: IMeta | IMeta[], path: string = 'Meta'): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      MetaValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, metaKeyDefinitions, path);
}
