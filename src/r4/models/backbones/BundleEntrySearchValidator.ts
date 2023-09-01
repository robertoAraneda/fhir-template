import { DataTypeAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IBundleEntrySearch } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../validators/ValidatorHelperR4';

export const bundleEntrySearchKeysDefinitions = DataTypeAttributesHelperR4<IBundleEntrySearch>([
  {
    name: 'mode',
    type: 'code',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'score',
    type: 'decimal',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_mode',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_score',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const bundleEntrySearchAttributes = bundleEntrySearchKeysDefinitions.map((item) => item.name);

export function BundleEntrySearchValidator(
  payload: IBundleEntrySearch | IBundleEntrySearch[],
  path: string = 'BundleEntrySearch',
): void {
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => {
      BundleEntrySearchValidator(item, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR4(payload, bundleEntrySearchKeysDefinitions, path);
}
