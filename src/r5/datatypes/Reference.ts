import { Identifier } from './Identifier';
import { Resource } from '../resources/Resource';

export class Reference<T> {
  reference?: string | T;
  display?: string;
  identifier?: Identifier;
  type?: string;

  constructor(args?: Partial<Reference<T>>) {
    Object.assign(this, args);

    if (args?.reference && typeof args.reference !== 'string') {
      const reference = args.reference as unknown as Resource;
      this.reference = `${reference.resourceType}/${reference.id}`;
    }
  }
}
