import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import Element from '../base/Element';
import { IRangeBuilder, RangeBuilder } from './RangeBuilder';

export default class Range extends Element implements IRange {
  // Range attributes
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;

  static builder(): IRangeBuilder {
    return new RangeBuilder();
  }

  constructor(args?: IRange) {
    super();
    Object.assign(this, args);
  }
}
