export class Period {
  private start: string;
  private end: string;

  getStart(): string {
    return this.start;
  }

  setStart(value: string): any {
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

  setEnd(value: string): any {
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
