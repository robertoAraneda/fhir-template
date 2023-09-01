import { BundleTypeEnum } from '../../../r4/enums';
import ResourceException from '../../../globals/exceptions/ResourceException';
import { ResourceAttributesHelperR5 } from '../../../globals/helpers/generateListAttributesHelper';
import Bundle from './Bundle';
import IBundle from '../../interfaces/resources/IBundle';
import { BundleEntryRequestMethodEnum } from '../../enums';
import { ValidatorHelperR5 } from '../../validators/ValidatorHelperR5';

export const isBundle = (obj: unknown): obj is Bundle => {
  return obj !== undefined && obj !== null && (obj as Bundle).resourceType === 'Bundle';
};

export const bundleKeysDefinitions = ResourceAttributesHelperR5<IBundle>([
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
    name: 'issues',
    type: 'Resource',
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
export const bundleFields = bundleKeysDefinitions.map((k) => k.name);

const ValidateConstraint = (payload: IBundle, path: string) => {
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

  payload.entry.forEach((entry, index) => {
    // bdl-2: entry.search only when a search
    if (entry.search && payload.type !== BundleTypeEnum.SEARCHSET) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-2',
            level: 'Rule',
            description: 'entry.search only when a search. Position: [' + index + ']',
            location: '(base)',
          },
        },
      ]);
    }

    // bdl-3a: For collections of type document, message, searchset or collection, all entries must contain resources, and not have request or response elements.
    if (
      (payload.type === BundleTypeEnum.DOCUMENT ||
        payload.type === BundleTypeEnum.MESSAGE ||
        payload.type === BundleTypeEnum.SEARCHSET ||
        payload.type === BundleTypeEnum.COLLECTION) &&
      (!entry.resource || entry.request || entry.response)
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-3a',
            level: 'Rule',
            description:
              'For collections of type document, message, searchset or collection, all entries must contain resources, and not have request or response elements. Position: [' +
              index +
              ']',
            location: '(base)',
          },
        },
      ]);
    }

    // bld-3b: For collections of type history, all entries must contain request or response elements, and resources if the method is POST, PUT or PATCH
    if (
      payload.type === BundleTypeEnum.HISTORY &&
      (!entry.request || !entry.response || (entry.request && entry.response)) &&
      (!entry.resource ||
        entry.request?.method === BundleEntryRequestMethodEnum.POST ||
        entry.request?.method === BundleEntryRequestMethodEnum.PUT ||
        entry.request?.method === BundleEntryRequestMethodEnum.PATCH)
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-3b',
            level: 'Rule',
            description:
              'For collections of type history, all entries must contain request or response elements, and resources if the method is POST, PUT or PATCH.',
            location: '(base)',
          },
        },
      ]);
    }

    // bld-3c: 	For collections of type transaction or batch, all entries must contain request elements, and resources if the method is POST, PUT or PATCH

    if (payload.type === BundleTypeEnum.TRANSACTION || payload.type === BundleTypeEnum.BATCH) {
      if (!entry.request) {
        throw new ResourceException(path, [
          {
            constraint: {
              id: 'bdl-3c',
              level: 'Rule',
              description:
                'For collections of type transaction or batch, all entries must contain request elements, and resources if the method is POST, PUT or PATCH. Position: [' +
                index +
                ']',
              location: '(base)',
            },
          },
        ]);
      }

      if (
        (entry.request?.method === BundleEntryRequestMethodEnum.POST ||
          entry.request?.method === BundleEntryRequestMethodEnum.PUT ||
          entry.request?.method === BundleEntryRequestMethodEnum.PATCH) &&
        !entry.resource
      ) {
        throw new ResourceException(path, [
          {
            constraint: {
              id: 'bdl-3c',
              level: 'Rule',
              description:
                'For collections of type transaction or batch, all entries must contain request elements, and resources if the method is POST, PUT or PATCH. Position: [' +
                index +
                ']',
              location: '(base)',
            },
          },
        ]);
      }
    }

    // bld-3d: For collections of type transaction-response or batch-response, all entries must contain response elements
    if (
      (payload.type === BundleTypeEnum.TRANSACTION_RESPONSE || payload.type === BundleTypeEnum.BATCH_RESPONSE) &&
      !entry.response
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-3d',
            level: 'Rule',
            description:
              'For collections of type transaction-response or batch-response, all entries must contain response elements.',
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

    // bdl-13: 	A subscription-notification must have a SubscriptionStatus as the first resource
    if (
      payload.type === BundleTypeEnum.SUBSCRIPTION_NOTIFICATION &&
      payload.entry &&
      payload.entry[0].resource?.resourceType !== 'SubscriptionStatus'
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-13',
            level: 'Rule',
            description: 'A subscription-notification must have a SubscriptionStatus as the first resource.',
            location: '(base)',
          },
        },
      ]);
    }

    // bld-14: entry.request.method PATCH not allowed for history
    if (entry.request?.method === BundleEntryRequestMethodEnum.PATCH && payload.type === BundleTypeEnum.HISTORY) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-14',
            level: 'Rule',
            description: 'entry.request.method PATCH not allowed for history.',
            location: '(base)',
          },
        },
      ]);
    }

    // bld-15: 	Bundle resources where type is not transaction, transaction-response, batch, or batch-response or when the request is a POST SHALL have Bundle.entry.fullUrl populated
    if (
      payload.type !== BundleTypeEnum.TRANSACTION &&
      payload.type !== BundleTypeEnum.TRANSACTION_RESPONSE &&
      payload.type !== BundleTypeEnum.BATCH &&
      payload.type !== BundleTypeEnum.BATCH_RESPONSE &&
      entry.request?.method !== BundleEntryRequestMethodEnum.POST &&
      !entry.fullUrl
    ) {
      throw new ResourceException(path, [
        {
          constraint: {
            id: 'bdl-15',
            level: 'Rule',
            description:
              'Bundle resources where type is not transaction, transaction-response, batch, or batch-response or when the request is a POST SHALL have Bundle.entry.fullUrl populated.',
            location: '(base)',
          },
        },
      ]);
    }
  });

  // bld-16 TODO

  // bld-17: Use and meaning of issues for documents has not been validated because the content will not be rendered in the document.
  if (payload.type === BundleTypeEnum.DOCUMENT && payload.issues) {
    throw new ResourceException(path, [
      {
        constraint: {
          id: 'bdl-17',
          level: 'Rule',
          description:
            'Use and meaning of issues for documents has not been validated because the content will not be rendered in the document.',
          location: '(base)',
        },
      },
    ]);
  }

  // bld-18: Self link is required for searchsets.
  if (payload.type === BundleTypeEnum.SEARCHSET && !payload.link?.find((l) => l.relation === 'self')) {
    throw new ResourceException(path, [
      {
        constraint: {
          id: 'bdl-18',
          level: 'Rule',
          description: 'Self link is required for searchsets.',
          location: '(base)',
        },
      },
    ]);
  }
};

export function BundleValidator(payload: IBundle, path: string = 'Bundle'): void {
  ValidatorHelperR5(payload, bundleKeysDefinitions, path);
  ValidateConstraint(payload, path);
}
