import { IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Period } from '../../models/datatypes/Period';
import { IBuildable, ISerializable } from '../../../globals/interfaces';

interface IPeriodBuilder extends IBuildable<IPeriod>, ISerializable {
  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder;
  setStart(value: string): PeriodBuilder;
  setEnd(value: string): PeriodBuilder;
}
export class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IPeriodBuilder {
  private readonly period: IPeriod;

  constructor() {
    super();
    this.period = new Period();
  }

  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder {
    this.period[`_${param}`] = extension;

    return this;
  }
  setStart(value: string): PeriodBuilder {
    this.period.start = value;

    return this;
  }

  setEnd(value: string): PeriodBuilder {
    this.period.end = value;

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
