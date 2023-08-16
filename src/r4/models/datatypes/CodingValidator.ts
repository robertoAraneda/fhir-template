import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ICoding } from '../../interfaces/datatypes';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const codingAttributes = DataTypeAttributesHelperR4<ICoding>([
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
    isArray: false,
    isRequired: false,
  },
  {
    name: '_version',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_code',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_display',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_userSelected',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export function CodingValidator(payload: ICoding | ICoding[], path: string = 'Coding'): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      CodingValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, codingAttributes, path);
}
