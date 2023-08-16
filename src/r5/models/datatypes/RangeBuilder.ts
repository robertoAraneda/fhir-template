import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import { Range } from './index';

interface IRangeBuilder extends IBuildable<Range>, IElementBuilder<RangeBuilder> {
  setLow(low: ISimpleQuantity): this;
  setHigh(high: ISimpleQuantity): this;
}
export default class RangeBuilder extends ElementBuilder<RangeBuilder> implements IRangeBuilder {
  private readonly range: IRange;
  constructor() {
    super();
    this.range = {} as IRange;
  }

  build(): Range {
    Object.assign(this.range, { ...super.entity() });
    return new Range(this.range).toJson();
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
