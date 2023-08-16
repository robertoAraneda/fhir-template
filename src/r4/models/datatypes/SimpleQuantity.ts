import { ISimpleQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { SimpleQuantityBuilder } from './SimpleQuantityBuilder';
import { SimpleQuantityValidator } from './SimpleQuantityValidator';

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

  toJson(): SimpleQuantity {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `SimpleQuantity${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `SimpleQuantity${JSON.stringify(this.toJson())}`;
  }

  static builder(): SimpleQuantityBuilder {
    return new SimpleQuantityBuilder();
  }
  constructor(args: ISimpleQuantity) {
    super();
    SimpleQuantityValidator(args);
    Object.assign(this, args);
  }
}
