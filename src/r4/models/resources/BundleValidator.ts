import { IBundle } from '../../interfaces/resources';
import { BundleTypeEnum } from '../../../enums';
import ResourceException from '../../../globals/exceptions/ResourceException';
import { ResourceAttributesHelperR4 } from '../../../globals/helpers/generateListAttributesHelper';
import { ValidateResourceFormatHelper } from '../../../globals/helpers/validateFormatHelper';
import Bundle from './Bundle';
import { ValidatorHelperR4 } from '../../../globals/helpers/ValidatorHelperR4';

export const isBundle = (obj: unknown): obj is Bundle => {
  return obj !== undefined && obj !== null && (obj as Bundle).resourceType === 'Bundle';
};

export const bundleKeysDefinitions = ResourceAttributesHelperR4<IBundle>([
  {
    name: 'identifier',
    type: 'Identifier',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'type',
    type: 'code',
    isRequired: true,
    isArray: false,
    enumValues: Object.values(BundleTypeEnum),
  },
  {
    name: 'timestamp',
    type: 'instant',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'total',
    type: 'unsignedInt',
    isRequired: false,
    isArray: false,
  },
  {
    name: 'link',
    type: 'BundleLink',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'entry',
    type: 'BundleEntry',
    isRequired: false,
    isArray: true,
  },
  {
    name: 'signature',
    type: 'Signature',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_total',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_type',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
  {
    name: '_timestamp',
    type: 'Element',
    isRequired: false,
    isArray: false,
  },
]);

export function BundleValidator(payload: IBundle, path: string = 'Bundle'): void {
  ValidatorHelperR4(payload, bundleKeysDefinitions, path);
  ValidateConstraint(payload, path);
}

function ValidateConstraint(payload: IBundle, path: string) {
  // bdl-1: total only when a search or history.
  if (payload.total && payload.type !== BundleTypeEnum.SEARCHSET && payload.type !== BundleTypeEnum.HISTORY) {
    throw new ResourceException(path, [
      {
        constraint: {
          id: 'bdl-1',
          level: 'Rule',
          description: 'total only when a search or history..',
          location: '(base)',
        },
      },
    ]);
  }

  if (!payload.entry?.length) return;

  payload.entry.forEach((entry) => {
    // bdl-2: entry.search only when a search
    if (entry.search && payload.type !== BundleTypeEnum.SEARCHSET) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-2',
            level: 'Rule',
            description: 'entry.search only when a search.',
            location: '(base)',
          },
        },
      ]);
    }

    // bdl-3: entry.request mandatory for batch/transaction/history, otherwise prohibited
    if (
      entry.request &&
      payload.type !== BundleTypeEnum.BATCH &&
      payload.type !== BundleTypeEnum.TRANSACTION &&
      payload.type !== BundleTypeEnum.HISTORY
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-3',
            level: 'Rule',
            description: 'entry.request mandatory for batch/transaction/history, otherwise prohibited.',
            location: '(base)',
          },
        },
      ]);
    }

    // bdl-4: entry.response mandatory for batch-response/transaction-response/history, otherwise prohibited
    if (
      entry.response &&
      payload.type !== BundleTypeEnum.BATCH_RESPONSE &&
      payload.type !== BundleTypeEnum.TRANSACTION_RESPONSE &&
      payload.type !== BundleTypeEnum.HISTORY
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-4',
            level: 'Rule',
            description:
              'entry.response mandatory for batch-response/transaction-response/history, otherwise prohibited.',
            location: '(base)',
          },
        },
      ]);
    }

    // bld-5: must be a resource unless there's a request or response
    if (!entry.resource && !entry.request && !entry.response) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-5',
            level: 'Rule',
            description: "must be a resource unless there's a request or response.",
            location: 'Bundle.entry',
          },
        },
      ]);
    }

    // bld-7: FullUrl must be unique in a bundle, or else entries with the same fullUrl must have different meta.versionId (except in history bundles)
    if (entry.fullUrl) {
      const fullUrl = entry.fullUrl;
      const fullUrlCount =
        payload.entry?.filter((e) => {
          if (e.fullUrl === fullUrl) {
            if (e.resource?.meta?.versionId && entry.resource?.meta?.versionId) {
              return e.resource?.meta?.versionId !== entry.resource?.meta?.versionId;
            }
            return true;
          }
        }).length || 0;
      if (fullUrlCount > 1 && payload.type !== BundleTypeEnum.HISTORY) {
        throw new ResourceException(path, [
          {
            constraint: {
              id: 'bdl-7',
              level: 'Rule',
              description:
                'FullUrl must be unique in a bundle, or else entries with the same fullUrl must have different meta.versionId (except in history bundles).',
              location: '(base)',
            },
          },
        ]);
      }
    }

    // bdl-8: fullUrl cannot be a version specific reference
    if (entry.fullUrl && entry.fullUrl.includes('/_history/')) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-8',
            level: 'Rule',
            description: 'fullUrl cannot be a version specific reference.',
            location: 'Bundle.entry',
          },
        },
      ]);
    }

    // bdl-9: A document must have an identifier with a system and a value
    if (
      payload.type === BundleTypeEnum.DOCUMENT &&
      (!payload.identifier || !payload.identifier.system || !payload.identifier.value)
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-9',
            level: 'Rule',
            description: 'A document must have an identifier with a system and a value.',
            location: '(base)',
          },
        },
      ]);
    }

    // bdl-10: A document must have a date
    if (payload.type === BundleTypeEnum.DOCUMENT && !payload.timestamp) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-10',
            level: 'Rule',
            description: 'A document must have a date.',
            location: '(base)',
          },
        },
      ]);
    }

    // bdl-11: A document must have a Composition as the first resource
    if (
      payload.type === BundleTypeEnum.DOCUMENT &&
      payload.entry &&
      payload.entry[0].resource?.resourceType !== 'Composition'
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-11',
            level: 'Rule',
            description: 'A document must have a Composition as the first resource.',
            location: '(base)',
          },
        },
      ]);
    }

    // bdl-12: A message must have a MessageHeader as the first resource
    if (
      payload.type === BundleTypeEnum.MESSAGE &&
      payload.entry &&
      payload.entry[0].resource?.resourceType !== 'MessageHeader'
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-12',
            level: 'Rule',
            description: 'A message must have a MessageHeader as the first resource.',
            location: '(base)',
          },
        },
      ]);
    }
  });
}
