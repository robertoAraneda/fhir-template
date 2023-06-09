import { IReference, IDomainResource } from '../interfaces/base';

export const transformReference = <T extends IDomainResource>(item: T): string => {
  const _item = item as IDomainResource;
  if (!_item.resourceType) throw new Error('Reference must have a resourceType');
  if (!_item.id) throw new Error('Reference must have an id');

  return `${_item.resourceType}/${_item.id}`;
};
