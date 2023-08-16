import { BackboneAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import { IBundleEntry } from '../../interfaces/backbones';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const bundleEntryKeysDefinitions = BackboneAttributesHelperR5<IBundleEntry>([
  {
    name: 'fullUrl',
    type: 'string',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'link',
    type: 'BundleLink',
    isArray: true,
    isRequired: false,
  },
  {
    name: 'request',
    type: 'BundleEntryRequest',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'resource',
    type: 'Resource',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'response',
    type: 'BundleEntryResponse',
    isArray: false,
    isRequired: false,
  },
  {
    name: 'search',
    type: 'BundleEntrySearch',
    isArray: false,
    isRequired: false,
  },
  {
    name: '_fullUrl',
    type: 'Element',
    isArray: false,
    isRequired: false,
  },
]);

export const bundleEntryKeys: ReadonlyArray<keyof IBundleEntry> = bundleEntryKeysDefinitions.map(
  (eachItem) => eachItem.name,
);

type Resources = 'Bundle' | 'Composition' | 'Endpoint';

export function BundleEntryValidator(payload: IBundleEntry | IBundleEntry[], path: string = 'BundleEntry'): void {
  if (Array.isArray(payload)) {
    payload.forEach((entry, index) => {
      BundleEntryValidator(entry, `${path}[${index}]`);
    });
    return;
  }

  ValidatorHelperR5(payload, bundleEntryKeysDefinitions, path);
}
