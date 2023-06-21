import { ISimpleQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import SimpleQuantityBuilder from './SimpleQuantityBuilder';
import Element from '../base/Element';

export default class SimpleQuantity extends Element implements ISimpleQuantity {
  // SimpleQuantity attributes
  value?: number;
  unit?: string;
  system?: string;
  code?: string;

  // Extension attributes
  _code?: IElement;
  _value?: IElement;
  _unit?: IElement;
  _system?: IElement;

  static builder(): SimpleQuantityBuilder {
    return new SimpleQuantityBuilder();
  }

  toJson(): SimpleQuantity {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `SimpleQuantity${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `SimpleQuantity${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: ISimpleQuantity) {
    super();
    Object.assign(this, args);
  }
}
