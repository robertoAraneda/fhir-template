import { IPeriod } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Period } from '../../datatypes/Period';

export class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IBuildable<IPeriod>, ISerializable {
  private period: IPeriod;

  constructor() {
    super();

    this.period = new Period();
  }

  fromJSON(json: IPeriod) {
    this.period = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  setStart(value: string): PeriodBuilder {
    this.period.start = value;

    return this;
  }

  setEnd(value: string): PeriodBuilder {
    this.period.end = value;

    return this;
  }

  addPeriodParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder {
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
