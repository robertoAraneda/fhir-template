import { IResource } from '../../interfaces/base';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

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
export const resourceAttributes: readonly string[] = [
  'id',
  'language',
  'implicitRules',
  '_implicitRules',
  '_language',
  'meta',
  'resourceType',
];
export const ResourceValidator = (resource: IResource | IResource[], path: string = 'Resource') => {
  if (Array.isArray(resource)) {
    resource.forEach((resource, index) => {
      ResourceValidator(resource, `${path}[${index}]`);
    });
    return;
  }
  if (!resource) {
    throw new Error(`${path} cannot be null or undefined`);
  }

  ValidatorHelperR4(resource, resourceKeysDefinitions, path);
};
