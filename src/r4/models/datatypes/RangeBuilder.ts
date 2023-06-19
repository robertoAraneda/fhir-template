import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';

export interface IRangeBuilder extends IBuildable<IRange>, ISerializable, IElementBuilder<IRangeBuilder> {
  setLow(low: ISimpleQuantity): this;

  setHigh(high: ISimpleQuantity): this;
}

export class RangeBuilder extends ElementBuilder<RangeBuilder> implements IRangeBuilder {
  private readonly range: IRange;

  constructor() {
    super();
    this.range = {} as IRange;
  }

  build(): IRange {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IRange {
    return {
      ...this.range,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
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
