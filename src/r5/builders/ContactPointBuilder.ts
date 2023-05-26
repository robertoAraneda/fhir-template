import { ContactPointSystem } from '../enumerators/ContactPointSystem';
import { ContactPointSystemType } from '../types/ContactPointSystemType';
import { ContactPointUse } from '../enumerators/ContactPointUse';
import { ContactPointUseType } from '../types/ContactPointUseType';
import { Period } from '../datatypes/Period';
import { PeriodInterface } from '../interfaces/PeriodInterface';
import { ContactPoint } from '../datatypes/ContactPoint';

export class ContactPointBuilder {
  private _system: ContactPointSystem | ContactPointSystemType;
  private _value: string;
  private _use: ContactPointUse | ContactPointUseType;
  private _rank: number;
  private _period: Period | PeriodInterface;

  getSystem(): ContactPointSystem | ContactPointSystemType {
    return this._system;
  }

  setSystem(value: ContactPointSystem | ContactPointSystemType): ContactPointBuilder {
    this._system = value;

    return this;
  }

  getValue(): string {
    return this._value;
  }

  setValue(value: string): ContactPointBuilder {
    this._value = value;

    return this;
  }

  getUse(): ContactPointUse | ContactPointUseType {
    return this._use;
  }

  setUse(value: ContactPointUse | ContactPointUseType): ContactPointBuilder {
    this._use = value;

    return this;
  }

  getRank(): number {
    return this._rank;
  }

  setRank(value: number): ContactPointBuilder {
    if (value < 1) throw new Error('Rank must 1 or up');
    this._rank = value;

    return this;
  }

  getPeriod(): Period {
    return this._period;
  }

  setPeriod(value: Period | PeriodInterface): ContactPointBuilder {
    if (value instanceof Period) {
      this._period = value;
    } else {
      this._period = new Period(value);
    }

    return this;
  }

  build(): ContactPoint {
    const contactPoint = new ContactPoint();

    contactPoint.system = this._system;
    contactPoint.value = this._value;
    contactPoint.use = this._use;
    contactPoint.rank = this._rank;
    contactPoint.period = this._period;

    return contactPoint;
  }
}
