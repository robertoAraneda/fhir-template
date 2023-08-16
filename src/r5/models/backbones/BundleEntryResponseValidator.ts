import { IBundleEntryResponse } from '../../interfaces/backbones';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const bundleEntryResponseKeysDefinitions = DataTypeAttributesHelperR5<IBundleEntryResponse>([
  {
    name: 'status',
    type: 'string',
    isArray: false,
    isRequired: true,
  },
  {
    name: 'location',
    type: 'uri',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'etag',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'lastModified',
    type: 'instant',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'outcome',
    type: 'Resource',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_status',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_location',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_etag',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_lastModified',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const bundleEntryResponseAttributes = bundleEntryResponseKeysDefinitions.map((item) => item.name);

export function BundleEntryResponseValidator(
  payload: IBundleEntryResponse | IBundleEntryResponse[],
  path: string = 'BundleEntryResponse',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((entry, index) => {
      BundleEntryResponseValidator(entry, `${path}[${index}]`);
    });

    return;
  }

  ValidatorHelperR5(payload, bundleEntryResponseKeysDefinitions, path);
}
