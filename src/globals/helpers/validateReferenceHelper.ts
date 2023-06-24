import { ResourcesListR4, ResourceTypeR4FromArray } from '../../r4/GlobalResourceTypes';
import ReferenceException from '../exceptions/ReferenceException';

export const validateReferenceHelper = (
  value: string,
  resources: ResourceTypeR4FromArray[] | 'all',
  path?: string,
): void => {
  if (value.startsWith('#')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('urn:')) return;
  if (value.startsWith('http://') || value.startsWith('https://')) return;

  const resourceType = value.split('/');
  if (!resourceType.length || resourceType.length !== 2) {
    throw new ReferenceException(
      'Invalid reference. Reference must be in the format {ResourceEnum}/{id}',
      resources,
      path,
    );
  }

  let internalResources = [];

  if (resources === 'all') {
    internalResources = ResourcesListR4 as unknown as ResourceTypeR4FromArray[];
  } else {
    internalResources = resources;
  }

  const resourceTypeForCheck = resourceType[0] as ResourceTypeR4FromArray;

  if (!internalResources.includes(resourceTypeForCheck)) {
    throw new ReferenceException(value, resources, path);
  }
};
