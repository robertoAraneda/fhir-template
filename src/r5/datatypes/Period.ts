export class Period {
  private start: string;
  private end: string;

  getStart(): string {
    return this.start;
  }

  setStart(value: string) {
    this.start = value;
  }

  getEnd(): string {
    return this.end;
  }

  setEnd(value: string) {
    this.end = value;
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
