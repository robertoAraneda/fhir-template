import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import Period from './Period';

export interface IPeriodBuilder extends IBuildable<Period>, IElementBuilder<PeriodBuilder> {
  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder;

  setStart(value: string): PeriodBuilder;

  setEnd(value: string): PeriodBuilder;
}

export class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IPeriodBuilder {
  private readonly period: Period;

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

  build(): Period {
    Object.assign(this.period, { ...super.entity() });
    return this.period.toJson();
  }
}
