import { IRange, ISimpleQuantity } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

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

export interface IRangeBuilder extends IBuildable<IRange>, ISerializable, IElementBuilder<IRangeBuilder> {
  setLow(low: ISimpleQuantity): this;
  setHigh(high: ISimpleQuantity): this;
}
class RangeBuilder extends ElementBuilder<RangeBuilder> implements IRangeBuilder {
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
