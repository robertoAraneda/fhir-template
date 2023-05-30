export class Duration {
  value?: number;
  unit?: string;
  system?: string;
  code?: string;

  constructor(args?: Partial<Duration>) {
    Object.assign(this, args);
  }
}
