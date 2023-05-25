import { Identifier } from './Identifier';
import { ResourceR5 } from '../resources/Resource';

export class Reference<T> {
  private reference: string;
  private display: string;
  private identifier: Identifier;
  private type: string;

  constructor(opts?: Partial<Reference<T>>) {
    Object.assign(this, opts);
  }

  setIdentifier(value: Identifier | any) {
    if (value instanceof Identifier) {
      this.identifier = value;
    } else {
      this.identifier = new Identifier(value);
    }
  }

  getIdentifier(): Identifier {
    return this.identifier;
  }

  setDisplay(value: string) {
    this.display = value;
  }

  getDisplay(): string {
    return this.display;
  }

  setType(value: string) {
    this.type = value;
  }

  getType(): string {
    return this.type;
  }

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

  toString() {
    return JSON.stringify({
      reference: this.reference,
      display: this.display,
      identifier: this.identifier,
      type: this.type,
    });
  }

  toJson() {
    return JSON.parse(this.toString());
  }
}
