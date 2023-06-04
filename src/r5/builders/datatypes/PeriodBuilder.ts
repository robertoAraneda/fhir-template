import { Period } from '../../interfaces/datatypes/Period';
import { Element } from '../../interfaces/base/Element';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';

export class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements Build<Period>, Serialize {
  private readonly period: Period;

  constructor() {
    super();

    this.period = {} as Period;
  }

  setStart(value: string): PeriodBuilder {
    this.period.start = value;

    return this;
  }

  setEnd(value: string): PeriodBuilder {
    this.period.end = value;

    return this;
  }

  addPeriodParamExtension(param: 'start' | 'end', extension: Element): PeriodBuilder {
    this.period[`_${param}`] = extension;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Period {
    return JSON.parse(this.serialize());
  }

  raw(): Period {
    return {
      ...this.period,
      ...super.entity(),
    };
  }
}
