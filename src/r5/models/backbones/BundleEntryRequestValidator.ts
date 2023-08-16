import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IBundleEntryRequest } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import BundleEntryRequestMethodEnum from '../../enums/BundleEntryRequestMethodEnum';

export const bundleEntryRequestKeysDefinitions = DataTypeAttributesHelperR5<IBundleEntryRequest>([
  {
    name: 'method',
    type: 'code',
    isArray: false,
    isRequired: true,
    enumValues: Object.values(BundleEntryRequestMethodEnum),
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

  ValidatorHelperR5(payload, bundleEntryRequestKeysDefinitions, path);
}
