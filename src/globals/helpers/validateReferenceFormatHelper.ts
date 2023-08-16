import { ResourcesListR4, ResourceTypeR4FromArray } from '../../r4/GlobalResourceTypes';
import ReferenceException from '../exceptions/ReferenceException';

export const ValidateReferenceFormatHelper = (
  value: string,
  resources: ResourceTypeR4FromArray[] | 'all' | null = null,
  path?: string,
): void => {
  if (value.startsWith('#')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('http://') || value.startsWith('https://')) return;

  // regex for resourceType/id
  const regex = /^[a-zA-Z]+\/[a-zA-Z0-9\-\.]+$/;

  // match with regex
  if (!regex.test(value)) {
    throw new ReferenceException(value, null, path);
  }

  if (!resources) return;

  let internalResources = [];
  if (resources === 'all') {
    internalResources = ResourcesListR4 as unknown as ResourceTypeR4FromArray[];
  } else {
    internalResources = resources;
  }

  const [resourceType] = value.split('/');

  const resourceTypeForCheck = resourceType as ResourceTypeR4FromArray;

  if (!internalResources.includes(resourceTypeForCheck)) {
    throw new ReferenceException(resourceType, resources, path);
  }
};
