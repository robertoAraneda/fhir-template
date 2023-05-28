import { Identifier } from './Identifier';
import { Resource } from '../resources/Resource';
import { Patient } from '../resources/Patient';

export class Reference<T> {
  reference?: T | string;
  display?: string;
  identifier?: Identifier;
  type?: string;

  constructor(args?: Reference<T>) {
    Object.assign(this, args);

    if (args?.reference && typeof args?.reference !== 'string') {
      const _reference = args?.reference as unknown as Resource;

      if (!_reference.resourceType) throw new Error('Reference must have a resourceType');
      if (!_reference.id) throw new Error('Reference must have an id');
      this.reference = `${_reference.resourceType}/${_reference.id}`;
    } else {
      this.reference = args?.reference;
    }
  }
}
