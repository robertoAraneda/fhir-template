import { Identifier } from './Identifier';
import { Resource } from './Resource';
import { Patient } from '../resources/Patient';
import { Organization } from '../resources/Organization';
import { DomainResource } from './DomainResource';

export class Reference<T extends DomainResource | string> {
  reference?: T;
  display?: string;
  identifier?: Identifier;
  type?: string;

  constructor(args?: Reference<T>) {
    Object.assign(this, args);

    if (args?.reference && typeof args?.reference !== 'string') {
      const _reference = args?.reference as any;

      if (!_reference.resourceType) throw new Error('Reference must have a resourceType');
      if (!_reference.id) throw new Error('Reference must have an id');
      this.reference = `${_reference.resourceType}/${_reference.id}` as T;
    } else {
      this.reference = args?.reference;
    }
  }
}
