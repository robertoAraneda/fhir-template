import { Period } from './Period';
import { Reference } from './Reference';
import { OrganizationR5 } from '../resources/Organization';

interface ISetterIdentifier {
  setUse: (value: string) => any;
  setSystem: (value: string) => any;
  setValue: (value: string) => any;
  setPeriod: (value: Period | any) => any;
  setAssigner: (value: Reference<OrganizationR5> | any) => any;
  toString: () => string;
  toJson: () => any;
}

type SetUse = Omit<ISetterIdentifier, 'setUse'>;
type SetSystem = Omit<ISetterIdentifier, 'setSystem'>;
type SetValue = Omit<ISetterIdentifier, 'setValue'>;
type SetPeriod = Omit<ISetterIdentifier, 'setPeriod'>;
type SetAssigner = Omit<ISetterIdentifier, 'setAssigner'>;

interface IdentifierParams {
  use: string;
  system: string;
  value: string;
  period: Period;
  assigner: Reference<OrganizationR5>;
}

export class Identifier {
  private use: string;
  private system: string;
  private value: string;
  private period: Period;
  private assigner: Reference<OrganizationR5>;

  getUse(): string {
    return this.use;
  }

  setUse(value: string): SetUse {
    this.use = value;

    return this;
  }

  getSystem(): string {
    return this.system;
  }

  setSystem(value: string): SetSystem {
    this.system = value;

    return this;
  }

  getValue(): string {
    return this.value;
  }

  setValue(value: string): SetValue {
    this.value = value;
    return this;
  }

  setPeriod(value: Period | any): SetPeriod {
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

  setAssigner(value: Reference<OrganizationR5> | any): SetAssigner {
    if (value instanceof Reference) {
      this.assigner = value;
    } else {
      this.assigner = new Reference<OrganizationR5>(value);
    }

    return this;
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

  constructor(opts?: IdentifierParams) {
    Object.assign(this, opts);
  }
}
