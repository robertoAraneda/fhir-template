import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IBundleLink } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const bundleLinkKeysDefinitions = DataTypeAttributesHelperR4<IBundleLink>([
  {
    name: 'relation',
    type: 'string',
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
    name: '_relation',
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
]);

export const bundleLinkAttributes = bundleLinkKeysDefinitions.map((e) => e.name);

export function BundleLinkValidator(payload: IBundleLink | IBundleLink[], path: string = 'BundleLink'): void {
  if (Array.isArray(payload)) {
    payload.forEach((entry, index) => {
      BundleLinkValidator(entry, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, bundleLinkKeysDefinitions, path);
}
