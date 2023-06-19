import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';

export interface IPeriodBuilder extends IBuildable<IPeriod>, ISerializable, IElementBuilder<IPeriodBuilder> {
  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder;

  setStart(value: string): PeriodBuilder;

  setEnd(value: string): PeriodBuilder;
}

export class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IPeriodBuilder {
  private readonly period: IPeriod;

  constructor() {
    super();
    this.period = {} as IPeriod;
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

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IPeriod {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IPeriod {
    return {
      ...this.period,
      ...super.entity(),
    };
  }
}
