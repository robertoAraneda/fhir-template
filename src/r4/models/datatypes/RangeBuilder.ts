import { IBuildable } from '../../../globals/interfaces';
import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import Range from './Range';

export interface IRangeBuilder extends IBuildable<Range>, IElementBuilder<RangeBuilder> {
  setLow(low: ISimpleQuantity): RangeBuilder;

  setHigh(high: ISimpleQuantity): RangeBuilder;
}

export class RangeBuilder extends ElementBuilder<RangeBuilder> implements IRangeBuilder {
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
