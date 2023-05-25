import { Period } from './Period';
import { Reference } from './Reference';
import { OrganizationR5 } from '../resources/Organization';

export class Identifier {
  private use: string;
  private system: string;
  private value: string;
  private period: Period;
  private assigner: Reference<OrganizationR5>;

  getUse(): string {
    return this.use;
  }

  setUse(value: string) {
    this.use = value;
  }

  getSystem(): string {
    return this.system;
  }

  setSystem(value: string) {
    this.system = value;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

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
  }

  toString() {
    return JSON.stringify({
      use: this.use,
      system: this.system,
      value: this.value,
      period: this.period,
      assigner: this.assigner,
    });
  }

  toJson() {
    return JSON.parse(this.toString());
  }

  constructor(opts?: Partial<Identifier>) {
    Object.assign(this, opts);
  }
}
