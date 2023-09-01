import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IBundleEntryRequest } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const bundleEntryRequestKeysDefinitions = DataTypeAttributesHelperR4<IBundleEntryRequest>([
  {
    name: 'method',
    type: 'code',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'url',
    type: 'uri',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'ifNoneMatch',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'ifModifiedSince',
    type: 'instant',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'ifMatch',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'ifNoneExist',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_method',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_url',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_ifNoneMatch',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_ifModifiedSince',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_ifMatch',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_ifNoneExist',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);
export const bundleEntryRequestAttributes = bundleEntryRequestKeysDefinitions.map((item) => item.name);

export function BundleEntryRequestValidator(
  payload: IBundleEntryRequest | IBundleEntryRequest[],
  path: string = 'BundleEntryRequest',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((bundleEntryRequest, index) => {
      BundleEntryRequestValidator(bundleEntryRequest, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, bundleEntryRequestKeysDefinitions, path);
}
