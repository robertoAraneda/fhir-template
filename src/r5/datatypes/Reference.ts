import { Identifier } from './Identifier';
import { ResourceR5 } from '../resources/Resource';

export interface ReferenceParams {
  reference?: string;
  display?: string;
  identifier?: Identifier;
  type?: string;
}

type SetReference = Omit<ISetterReference, 'SetReference'>;
type SetIdentifier = Omit<ISetterReference, 'SetIdentifier'>;
type SetDisplay = Omit<ISetterReference, 'SetDisplay'>;
type SetType = Omit<ISetterReference, 'SetType'>;

export interface ISetterReference {
  setDisplay(value: string): SetDisplay;
  setType(value: string): SetType;
  setReference(value: string | any): SetReference;
  setIdentifier(value: Identifier | any): SetIdentifier;
}

export class Reference<T> {
  private reference: string;
  private display: string;
  private identifier: Identifier;
  private type: string;

  constructor(opts?: ReferenceParams) {
    Object.assign(this, opts);

    if (opts?.identifier) {
      this.setIdentifier(opts.identifier);
    }
  }

  setIdentifier(value: Identifier | any): SetIdentifier {
    if (value instanceof Identifier) {
      this.identifier = value;
    } else {
      this.identifier = new Identifier(value);
    }
    return this;
  }

  getIdentifier(): Identifier {
    return this.identifier;
  }

  setDisplay(value: string): SetDisplay {
    this.display = value;
    return this;
  }

  getDisplay(): string {
    return this.display;
  }

  setType(value: string): SetType {
    this.type = value;
    return this;
  }

  getType(): string {
    return this.type;
  }

  setReference(value: string | T): SetReference {
    if (typeof value === 'string') {
      this.reference = value;
    } else {
      if (value instanceof ResourceR5) {
        this.reference = `${value.resourceType}/${value.id}`;
      }
    }

    return this;
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
