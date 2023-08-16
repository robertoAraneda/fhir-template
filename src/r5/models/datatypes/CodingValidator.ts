import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ICoding } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const codingKeysDefinitions = DataTypeAttributesHelperR5<ICoding>([
  {
    name: 'system',
    type: 'uri',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'version',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'code',
    type: 'code',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'display',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'userSelected',
    type: 'boolean',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_system',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_version',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_code',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_display',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_userSelected',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export function CodingValidator(payload: ICoding | ICoding[], path: string = 'Coding') {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      CodingValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, codingKeysDefinitions, path);
}
