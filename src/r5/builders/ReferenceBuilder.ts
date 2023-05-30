import { Identifier } from '../datatypes/Identifier';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Resource } from '../datatypes/Resource';
import { DomainResource } from '../datatypes/DomainResource';

export class ReferenceBuilder<T extends DomainResource | string> {
  private _reference: T;
  private _display: string;
  private _identifier: Identifier;
  private _type: string;

  setReference(value: T): ReferenceBuilder<T> {
    this._reference = value;

    return this;
  }

  setDisplay(value: string): ReferenceBuilder<T> {
    this._display = value;
    return this;
  }

  setIdentifier(value: Identifier): ReferenceBuilder<T> {
    this._identifier = value;

    return this;
  }

  setType(value: string): ReferenceBuilder<T> {
    this._type = value;
    return this;
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
