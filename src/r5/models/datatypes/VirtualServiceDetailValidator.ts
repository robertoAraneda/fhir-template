import { IVirtualServiceDetail } from '../../interfaces/datatypes';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';

export const serviceDetailKeysDefinitions = DataTypeAttributesHelperR5<IVirtualServiceDetail>([
  {
    name: 'additionalInfo',
    type: 'url',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'addressContactPoint',
    type: 'ContactPoint',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'addressExtendedContactDetail',
    type: 'ExtendedContactDetail',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'addressString',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'addressUrl',
    type: 'url',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'channelType',
    type: 'Coding',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'maxParticipants',
    type: 'positiveInt',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'sessionKey',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_additionalInfo',
    type: 'Element',
    isArray: true,
    isRequired: false,
  },
  {
    name: '_addressString',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_addressUrl',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_maxParticipants',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_sessionKey',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const VirtualServiceDetailValidator = (
  payload: IVirtualServiceDetail | IVirtualServiceDetail[],
  path: string = 'VirtualServiceDetail',
): void => {
  if (Array.isArray(payload)) {
    payload.forEach((item) => {
      VirtualServiceDetailValidator(item, `${path}[${payload.indexOf(item)}]`);
    });

    return;
  }

  ValidatorHelperR5(payload, serviceDetailKeysDefinitions, path);
};
