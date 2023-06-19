import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import { Range } from '../../models/datatypes';

interface IRangeBuilder extends IBuildable<IRange>, ISerializable {
  setLow(low: ISimpleQuantity): this;
  setHigh(high: ISimpleQuantity): this;
}
export default class RangeBuilder extends ElementBuilder<RangeBuilder> implements IRangeBuilder {
  private readonly range: IRange;
  constructor() {
    super();
    this.range = new Range();
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
