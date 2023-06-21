import { IQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import QuantityBuilder from './QuantityBuilder';
import Element from '../base/Element';

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

  static builder(): QuantityBuilder {
    return new QuantityBuilder();
  }

  toJson(): Quantity {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Quantity${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Quantity${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IQuantity) {
    super();
    Object.assign(this, args);
  }
}
