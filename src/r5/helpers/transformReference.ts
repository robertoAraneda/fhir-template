import { Reference } from '../interfaces/base/Reference';
import { DomainResource } from '../interfaces/base/DomainResource';

export const transformReference = <T extends DomainResource>(item: T): string => {
  const _item = item as DomainResource;
  if (!_item.resourceType) throw new Error('Reference must have a resourceType');
  if (!_item.id) throw new Error('Reference must have an id');

  return `${_item.resourceType}/${_item.id}`;
};
