import { IBundleEntrySearch } from '../../interfaces/backbones';
import { DataTypeAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';
import BundleEntrySearchModeEnum from '../../enums/BundleEntrySearchModeEnum';

export const bundleEntrySearchKeysDefinitions = DataTypeAttributesHelperR5<IBundleEntrySearch>([
  {
    name: 'mode',
    type: 'code',
    isArray: false,
    isRequired: false,
    enumValues: Object.values(BundleEntrySearchModeEnum),
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

  ValidatorHelperR5(payload, bundleEntrySearchKeysDefinitions, path);
}
