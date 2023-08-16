import { BackboneAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { IBundleEntry } from '../../interfaces/backbones';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const bundleEntryKeysDefinitions = BackboneAttributesHelperR4<IBundleEntry>([
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

  /*

  if (payload.resource) {
    const resourceType = payload.resource.resourceType as ResourceTypeR4FromArray;
    if (!resourceType) throw new Error('Resource type is not defined');

    if (resourceType === 'Bundle' || resourceType === 'Composition' || resourceType === 'Endpoint') {
      const validator = ResourceValidator[resourceType] as
        | Validator['Bundle']
        | Validator['Composition']
        | Validator['Endpoint'];
      if (validator) validator(payload.resource as any, path);
    }
  }

  if (payload.request) BundleEntryRequestValidator(payload.request, `${path}.request`);
  if (payload.response) BundleEntryResponseValidator(payload.response, `${path}.response`);
  if (payload.search) BundleEntrySearchValidator(payload.search, `${path}.search`);
  if (payload.link) BundleLinkValidator(payload.link, `${path}.link`);

  ValidateExtensionFieldHelper(payload, path);
  ValidateInvalidFieldHelper(payload, bundleEntryAttributes, path);

   */

  ValidatorHelperR4(payload, bundleEntryKeysDefinitions, path);
}
