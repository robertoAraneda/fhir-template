import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import Element from '../base/Element';
import { RangeBuilder } from './RangeBuilder';
import { RangeValidator } from './RangeValidator';

export default class Range extends Element implements IRange {
  // Range attributes
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;

  toJson(): Range {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Range${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Range${JSON.stringify(this.toJson())}`;
  }

  static builder(): RangeBuilder {
    return new RangeBuilder();
  }

  constructor(args: IRange) {
    super();
    RangeValidator(args);
    Object.assign(this, args);
  }
}
