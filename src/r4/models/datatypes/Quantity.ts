import { IQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import Element from '../base/Element';
import { IQuantityBuilder, QuantityBuilder } from './QuantityBuilder';

export default class Quantity extends Element implements IQuantity {
  // Quantity Properties
  code: string;
  comparator: QuantityComparatorEnum | QuantityComparatorType;
  system: string;
  unit: string;
  value: number;

  // Quantity Extensions
  _code: IElement;
  _comparator: IElement;
  _system: IElement;
  _unit: IElement;
  _value: IElement;

  toJson(): Quantity {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Quantity${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Quantity${JSON.stringify(this.toJson())}`;
  }

  static builder(): QuantityBuilder {
    return new QuantityBuilder();
  }

  constructor(args?: IQuantity) {
    super();
    Object.assign(this, args);
  }
}
