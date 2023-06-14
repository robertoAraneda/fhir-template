import { IPeriod } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Period } from '../../models/datatypes';

interface IPeriodBuilder extends IBuildable<IPeriod>, ISerializable {
  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder;
  setStart(value: string): PeriodBuilder;
  setEnd(value: string): PeriodBuilder;
}
export default class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IPeriodBuilder {
  private readonly period: IPeriod;

  constructor() {
    super();
    this.period = new Period();
  }

  setStart(value: string): PeriodBuilder {
    this.period.start = value;

    return this;
  }

  setEnd(value: string): PeriodBuilder {
    this.period.end = value;

    return this;
  }

  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder {
    this.period[`_${param}`] = extension;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IPeriod {
    return JSON.parse(this.serialize());
  }

  raw(): IPeriod {
    return {
      ...this.period,
      ...super.entity(),
    };
  }
}
