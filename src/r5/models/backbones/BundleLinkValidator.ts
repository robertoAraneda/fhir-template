import { IBundleLink } from '../../interfaces/backbones';
import BundleLinkRelationEnum from '../../enums/BundleLinkRelationEnum';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const bundleLinkKeysDefinitions = DataTypeAttributesHelperR5<IBundleLink>([
  {
    name: 'relation',
    type: 'string',
    isArray: false,
    isRequired: true,
    enumValues: Object.values(BundleLinkRelationEnum),
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

  ValidatorHelperR5(payload, bundleLinkKeysDefinitions, path);
}
