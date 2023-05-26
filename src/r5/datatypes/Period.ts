export class Period {
  start?: string;
  end?: string;

  constructor(args?: Partial<Period>) {
    Object.assign(this, args);
  }
}
