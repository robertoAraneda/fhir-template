export class Period {
  start: string;
  end: string;

  constructor(ops?: Partial<Period>) {
    Object.assign(this, ops);
  }
}
