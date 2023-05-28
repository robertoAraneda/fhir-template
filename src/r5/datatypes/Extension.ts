export class Extension extends Element {
  url: string;
  value?: any;

  constructor(args?: Partial<Extension>) {
    super();
    Object.assign(this, args);
  }
}
