import { IDomainResource as IDomainResourceR4 } from '../../r4/interfaces/base';
import { IDomainResource as IDomainResourceR5 } from '../../r5/interfaces/base';

type IGlobalDomainResource = IDomainResourceR4 | IDomainResourceR5;

export const transformReference = <T extends IGlobalDomainResource>(item: T): string => {
  const _item = item as IGlobalDomainResource;
  if (!_item.resourceType) throw new Error('Reference must have a resourceType');
  if (!_item.id) throw new Error('Reference must have an id');

  return `${_item.resourceType}/${_item.id}`;
};
