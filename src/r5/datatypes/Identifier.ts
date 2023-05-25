import { Period } from './Period';
import { Reference } from './Reference';
import { Organization } from '../resources/Organization';

export class Identifier {
  use: string;
  system: string;
  value: string;
  period: Period;
  assigner: Reference<Organization>;

  constructor(opts: any) {
    Object.assign(this, opts);
  }
}
