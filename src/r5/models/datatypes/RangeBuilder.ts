import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import { Range } from './index';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

interface IRangeBuilder extends IBuildable<Range>, IElementBuilder<RangeBuilder> {
  setLow(low: ISimpleQuantity): this;
  setHigh(high: ISimpleQuantity): this;
}
export default class RangeBuilder extends ElementBuilder<RangeBuilder> implements IRangeBuilder {
  private readonly range: Range;
  constructor() {
    super();
    this.range = new Range();
  }

  build(): Range {
    Object.assign(this.range, { ...super.entity() });
    return this.range.toJson();
  }

  setHigh(high: ISimpleQuantity): this {
    this.range.high = high;
    return this;
  }

  setLow(low: ISimpleQuantity): this {
    this.range.low = low;
    return this;
  }
}
