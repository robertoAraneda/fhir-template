import { Period } from '../datatypes/Period';

export class PeriodBuilder {
  private _start: string;
  private _end: string;

  getStart(): string {
    return this._start;
  }

  setStart(value: string): PeriodBuilder {
    this._start = value;

    return this;
  }

  getEnd(): string {
    return this._end;
  }

  setEnd(value: string): PeriodBuilder {
    this._end = value;

    return this;
  }

  toString(): string {
    return JSON.stringify({
      start: this._start,
      end: this._end,
    });
  }

  toJson() {
    return JSON.parse(this.toString());
  }

  build(): Period {
    const period = new Period();

    period.start = this._start;
    period.end = this._end;

    return period;
  }
}
