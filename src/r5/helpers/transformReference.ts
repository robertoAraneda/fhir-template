import { Reference } from '../datatypes/Reference';

export const transformReference = (item: Reference<any>, attribute: string, validate: string[]): Reference<any> => {
  if (item.reference && typeof item.reference !== 'string') {
    const _item = item.reference as any;
    if (!_item.resourceType) throw new Error('Reference must have a resourceType');
    if (!_item.id) throw new Error('Reference must have an id');

    if (validate && validate.indexOf(_item.resourceType) === -1)
      throw new Error(`Reference must be one of ${validate.join(', ')} in ${attribute} attribute`);
    item.reference = `${_item.resourceType}/${_item.id}`;
  }

  return item;
};
