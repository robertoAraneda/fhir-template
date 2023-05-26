import { Identifier } from '../datatypes/Identifier';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Resource } from '../resources/Resource';

export class ReferenceBuilder<T> {
  private _reference: string | T;
  private _display: string;
  private _identifier: Identifier;
  private _type: string;

  getReference(): string | T {
    return this._reference;
  }

  setReference(value: string | T): ReferenceBuilder<T> {
    if (typeof value === 'string') {
      this._reference = value;
    }

    if (value instanceof Resource) {
      this._reference = `${value.resourceType}/${value.id}`;
    }

    return this;
  }

  getDisplay(): string {
    return this._display;
  }

  setDisplay(value: string): ReferenceBuilder<T> {
    this._display = value;
    return this;
  }

  getIdentifier(): Identifier {
    return this._identifier;
  }

  setIdentifier(value: Identifier | any): ReferenceBuilder<T> {
    if (value instanceof Identifier) {
      this._identifier = value;
    } else {
      this._identifier = new Identifier(value);
    }
    return this;
  }

  getType(): string {
    return this._type;
  }

  setType(value: string): ReferenceBuilder<T> {
    this._type = value;
    return this;
  }

  toString(): string {
    return JSON.stringify({
      reference: this._reference,
      display: this._display,
      identifier: this._identifier,
      type: this._type,
    });
  }

  toJson() {
    return JSON.parse(this.toString());
  }

  build(): Reference<T> {
    const reference = new Reference<T>();

    reference.reference = this._reference;
    reference.display = this._display;
    reference.identifier = this._identifier;
    reference.type = this._type;

    return reference;
  }
}
