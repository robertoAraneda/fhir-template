import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import RangeBuilder from './RangeBuilder';
import Element from '../base/Element';

export default class Range extends Element implements IRange {
  // Range attributes
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;

  static builder(): RangeBuilder {
    return new RangeBuilder();
  }

  toJson(): Range {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Range${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Range${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IRange) {
    super();
    Object.assign(this, args);
  }
}
