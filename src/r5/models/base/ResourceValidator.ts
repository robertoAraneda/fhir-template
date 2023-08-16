import { IResource } from '../../interfaces/base';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const resourceKeysDefinitions: ReadonlyArray<any> = [
  {
    isRequired: false,
    isArray: false,
    name: 'id',
    type: 'string',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'language',
    type: 'code',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'implicitRules',
    type: 'uri',
  },
  {
    isRequired: false,
    isArray: false,
    name: '_implicitRules',
    type: 'Element',
  },
  {
    isRequired: false,
    isArray: false,
    name: '_language',
    type: 'Element',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'meta',
    type: 'Meta',
  },
  {
    isRequired: false,
    isArray: false,
    name: 'resourceType',
    type: 'code',
  },
];

export const ResourceValidator = (payload: IResource | IResource[], path: string = 'Resource') => {
  if (Array.isArray(payload)) {
    payload.forEach((resource, index) => {
      ResourceValidator(resource, `${path}[${index}]`);
    });
    return;
  }
  if (!payload) {
    throw new Error(`${path} cannot be null or undefined`);
  }

  ValidatorHelperR5(payload, resourceKeysDefinitions, path);
};
