import { Period } from '../datatypes/Period';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Identifier } from '../datatypes/Identifier';
import { PeriodInterface } from '../interfaces/PeriodInterface';
import { IdentifierUse } from '../enums/IdentifierUse';
import { IdentifierUseType } from '../types/IdentifierUseType';
import { DomainResource } from '../datatypes/DomainResource';
import { transformReference } from '../helpers/transformReference';

export class IdentifierBuilder {
  private _use: IdentifierUse | IdentifierUseType;
  private _system: string;
  private _value: string;
  private _period: Period;
  private _assigner: Reference<Organization | string>;

  setUse(value: IdentifierUse | IdentifierUseType): IdentifierBuilder {
    this._use = value;

    return this;
  }

  setSystem(value: string): IdentifierBuilder {
    this._system = value;

    return this;
  }

  setValue(value: string): IdentifierBuilder {
    this._value = value;

    return this;
  }

  setPeriod(value: Period): IdentifierBuilder {
    this._period = value;

    return this;
  }

  setAssigner<T extends DomainResource | string>(value: Reference<T>): IdentifierBuilder {
    this._assigner = transformReference(value, 'Organization', ['Organization']);

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
