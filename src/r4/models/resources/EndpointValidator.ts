import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IEndpoint } from '../../interfaces/resources';
import { ValidateResourceFormatHelper } from '../../../globals/helpers/validateFormatHelper';
import { EndpointStatusEnum } from '../../../enums';
import { EndpointStatusType } from '../../../types';
import InvalidFieldException from '../../../globals/exceptions/InvalidFieldException';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const isEndpoint = (obj: unknown): obj is IEndpoint => {
  return obj !== undefined && obj !== null && (obj as IEndpoint).resourceType === 'Endpoint';
};

export const endpointKeysDefinitions = ResourceAttributesHelperR4<IEndpoint>([
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
    type: 'Coding',
    isRequired: true,
    isArray: false,
  },
  {
    name: 'name',
    type: 'string',
    isRequired: false,
    isArray: false,
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
    name: 'payloadType',
    type: 'CodeableConcept',
    isRequired: true,
    isArray: true,
  },
  {
    name: 'payloadMimeType',
    type: 'code',
    isRequired: false,
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
    name: '_status',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_payloadMimeType',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export const endpointFields = endpointKeysDefinitions.map((k) => k.name);

export function EndpointValidator(payload: IEndpoint, path: string = 'Endpoint') {
  ValidatorHelperR4(payload, endpointKeysDefinitions, path);
}
