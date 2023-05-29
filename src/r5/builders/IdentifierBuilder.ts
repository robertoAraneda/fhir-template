import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Identifier } from '../datatypes/Identifier';
import { PeriodInterface } from '../interfaces/PeriodInterface';
import { IdentifierUse } from '../enumerators/IdentifierUse';
import { IdentifierUseType } from '../types/IdentifierUseType';

export class IdentifierBuilder {
  private _use: IdentifierUse | IdentifierUseType;
  private _system: string;
  private _value: string;
  private _period: Period;
  private _assigner: Reference<Organization | string>;

  getUse(): string {
    return this._use;
  }

  setUse(value: IdentifierUse | IdentifierUseType): IdentifierBuilder {
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

  getAssigner(): Reference<Organization | string> {
    return this._assigner;
  }

  setAssigner(value: Reference<Organization | string>): IdentifierBuilder {
    if (value instanceof Reference<Organization>) {
      if (value.reference && typeof value.reference !== 'string') {
        throw new Error(`Invalid assigner passed to Identifier. Must be of type Organization.`);
      }
    }

    return this;
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
