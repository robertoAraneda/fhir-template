type SetStart = Omit<ISetterPeriod, 'setStart'>;
type SetEnd = Omit<ISetterPeriod, 'setEnd'>;

export interface ISetterPeriod {
  setEnd: (value: string) => SetEnd;
  setStart: (value: string) => SetStart;
  toString: () => string;
  toJson: () => any;
}

interface IPeriod {
  start: string;
  end: string;
}

export class Period {
  private start: string;
  private end: string;

  getStart(): string {
    return this.start;
  }

  setStart(value: string): SetStart {
    this.start = value;
    return this;
  }

  getEnd(): string {
    return this.end;
  }

  setEnd(value: string): SetEnd {
    this.end = value;
    return this;
  }

  toString(): string {
    return JSON.stringify({
      start: this.start,
      end: this.end,
    });
  }

  toJson() {
    return JSON.parse(this.toString());
  }

  constructor(ops?: IPeriod) {
    Object.assign(this, ops);
  }
}
