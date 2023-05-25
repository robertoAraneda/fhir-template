import { Period } from './Period';
import { Reference } from './Reference';
import { OrganizationR5 } from '../resources/Organization';

export class Identifier {
  use: string;
  system: string;
  value: string;
  private period: Period;
  private assigner: Reference<OrganizationR5>;

  setPeriod(value: Period | any) {
    if (value instanceof Period) {
      this.period = value;
    } else {
      this.period = new Period(value);
    }

    return this;
  }

  getPeriod(): Period {
    return this.period;
  }

  getAssigner(): Reference<OrganizationR5> {
    return this.assigner;
  }

  setAssigner(value: Reference<OrganizationR5> | any) {
    if (value instanceof Reference) {
      this.assigner = value;
    } else {
      this.assigner = new Reference<OrganizationR5>(value);
    }

    return this;
  }

  constructor(opts?: Partial<Identifier>) {
    Object.assign(this, opts);
  }
}
