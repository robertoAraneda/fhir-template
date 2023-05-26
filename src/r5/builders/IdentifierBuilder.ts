import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Identifier } from '../datatypes/Identifier';
import { PeriodInterface } from '../interfaces/PeriodInterface';
import { ReferenceInterface } from '../interfaces/ReferenceInterface';

export class IdentifierBuilder {
  private _use: string;
  private _system: string;
  private _value: string;
  private _period: Period;
  private _assigner: Reference<Organization> | ReferenceInterface<Organization>;

  getUse(): string {
    return this._use;
  }

  setUse(value: string): IdentifierBuilder {
    this._use = value;

    return this;
  }

  getSystem(): string {
    return this._system;
  }

  setSystem(value: string): IdentifierBuilder {
    this._system = value;

    return this;
  }

  getValue(): string {
    return this._value;
  }

  setValue(value: string): IdentifierBuilder {
    this._value = value;

    return this;
  }

  getPeriod(): Period {
    return this._period;
  }

  setPeriod(value: Period | PeriodInterface): IdentifierBuilder {
    if (value instanceof Period) {
      this._period = value;
    } else {
      this._period = new Period(value);
    }

    return this;
  }

  getAssigner(): Reference<Organization> {
    return this._assigner;
  }

  setAssigner(value: Reference<Organization> | ReferenceInterface<Organization>): IdentifierBuilder {
    if (value instanceof Reference) {
      this._assigner = value;
    } else {
      this._assigner = new Reference<Organization>(value);
    }

    return this;
  }

  toString() {
    return JSON.stringify({
      use: this._use,
      system: this._system,
      value: this._value,
      period: this._period,
      assigner: this._assigner,
    });
  }

  toJson() {
    return JSON.parse(this.toString());
  }

  build(): Identifier {
    const identifier = new Identifier();

    identifier.use = this._use;
    identifier.system = this._system;
    identifier.value = this._value;
    identifier.period = this._period;
    identifier.assigner = this._assigner;
    return identifier;
  }
}
