export class Coding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;

  constructor(args?: Partial<Coding>) {
    Object.assign(this, args);
  }
}
