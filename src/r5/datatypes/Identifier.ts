import { Period } from './Period';
import { Reference } from './Reference';
import { OrganizationR5 } from '../resources/Organization';

export class Identifier {
  use: string;
  system: string;
  value: string;
  period: Period;
  assigner: Reference<OrganizationR5>;

  constructor(opts: any) {
    Object.assign(this, opts);
  }
}
