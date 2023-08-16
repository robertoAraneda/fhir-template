import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { Period } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

interface IPeriodBuilder extends IBuildable<Period>, IElementBuilder<PeriodBuilder> {
  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder;
  setStart(value: string): PeriodBuilder;
  setEnd(value: string): PeriodBuilder;
}
export default class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IPeriodBuilder {
  private readonly period: Period;

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

  build(): Period {
    Object.assign(this.period, { ...super.entity() });
    return this.period.toJson();
  }
}
