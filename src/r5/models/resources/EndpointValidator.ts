import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IEndpoint } from '../../interfaces/resources';
import { EndpointStatusEnum } from '../../../r4/enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const isEndpoint = (obj: unknown): obj is IEndpoint => {
  return obj !== undefined && obj !== null && (obj as IEndpoint).resourceType === 'Endpoint';
};

export const endpointKeysDefinitions = ResourceAttributesHelperR5<IEndpoint>([
  {
    name: 'identifier',
    type: 'Identifier',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'status',
    type: 'code',
    isRequired: true,
    isArray: false,
    enumValues: Object.values(EndpointStatusEnum),
  },
  {
    name: 'connectionType',
    type: 'CodeableConcept',
    isRequired: true,
    isArray: true,
  },
  {
    name: 'name',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'description',
    type: 'string',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'environmentType',
    type: 'CodeableConcept',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'managingOrganization',
    type: 'Reference',
    isRequired: false,
    isArray: false,
    referenceValues: ['Organization'],
  },
  {
    name: 'contact',
    type: 'ContactPoint',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'period',
    type: 'Period',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'payload',
    type: 'EndpointPayload',
    isRequired: true,
    isArray: true,
  },
  {
    name: 'address',
    type: 'url',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'header',
    type: 'string',
    isRequired: false,
    isArray: true,
  },
  {
    name: '_address',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_header',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_name',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_description',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_status',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const endpointFields = endpointKeysDefinitions.map((k) => k.name);

export function EndpointValidator(payload: IEndpoint, path: string = 'Endpoint') {
  ValidatorHelperR5(payload, endpointKeysDefinitions, path);
}
