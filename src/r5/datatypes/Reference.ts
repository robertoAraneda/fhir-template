import { Identifier } from './Identifier';
import { ResourceR5 } from '../resources/Resource';

export class Reference<T> {
  private reference: string;
  display: string;
  identifier: Identifier;
  type: string;

  setReference(value: string | T) {
    if (typeof value === 'string') {
      this.reference = value;
    } else {
      if (value instanceof ResourceR5) {
        this.reference = `${value.resourceType}/${value.id}`;
      }
    }
  }

  getReference(): string {
    return this.reference;
  }

  constructor(opts?: Partial<Reference<T>>) {
    Object.assign(this, opts);
  }
}
