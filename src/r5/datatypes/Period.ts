interface ISetStart {
  setEnd: (value: string) => ISetEnd;
  toString: () => string;
  toJson: () => any;
}

interface ISetEnd {
  setStart: (value: string) => ISetStart;
  toString: () => string;
  toJson: () => any;
}

export class Period {
  private start: string;
  private end: string;

  getStart(): string {
    return this.start;
  }

  setStart(value: string): ISetStart {
    this.start = value;
    return {
      setEnd: this.setEnd,
      toString: this.toString,
      toJson: this.toJson,
    };
  }

  getEnd(): string {
    return this.end;
  }

  setEnd(value: string): ISetEnd {
    this.end = value;
    return {
      setStart: this.setStart,
      toString: this.toString,
      toJson: this.toJson,
    };
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

  constructor(ops?: Partial<Period>) {
    Object.assign(this, ops);
  }
}
