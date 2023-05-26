import { Period, PeriodParams } from './Period';
import { Reference, ReferenceParams } from './Reference';
import { OrganizationR5 } from '../resources/Organization';

type SetUse = Omit<ISetterIdentifier, 'setUse'>;
type SetSystem = Omit<ISetterIdentifier, 'setSystem'>;
type SetValue = Omit<ISetterIdentifier, 'setValue'>;
type SetPeriod = Omit<ISetterIdentifier, 'setPeriod'>;
type SetAssigner = Omit<ISetterIdentifier, 'setAssigner'>;

export interface ISetterIdentifier {
  setUse: (value: string) => SetUse;
  setSystem: (value: string) => SetSystem;
  setValue: (value: string) => SetValue;
  setPeriod: (value: Period | any) => SetPeriod;
  setAssigner: (value: Reference | any) => SetAssigner;
  toString: () => string;
  toJson: () => any;
}

export interface IdentifierParams {
  use?: string;
  system?: string;
  value?: string;
  period?: Period | PeriodParams;
  assigner?: Reference | ReferenceParams;
}

export class Identifier {
  private use: string;
  private system: string;
  private value: string;
  private period: Period;
  private assigner: Reference;

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

  getAssigner(): Reference {
    return this.assigner;
  }

  setAssigner(value: Reference | any): SetAssigner {
    if (value instanceof Reference) {
      this.assigner = value;
    } else {
      this.assigner = new Reference(value);
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

    if (opts?.period) {
      this.setPeriod(opts.period);
    }

    if (opts?.assigner) {
      this.setAssigner(opts.assigner);
    }
  }
}
