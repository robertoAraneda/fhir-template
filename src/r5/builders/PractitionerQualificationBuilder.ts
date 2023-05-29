import { Period } from '../datatypes/Period';
import { PractitionerQualification } from '../datatypes/PractitionerQualification';
import { Reference } from '../datatypes/Reference';
import { Organization } from '../resources/Organization';
import { Identifier } from '../datatypes/Identifier';
import { CodeableConcept } from '../datatypes/CodeableConcept';

export class PractitionerQualificationBuilder {
  private _code: CodeableConcept;
  private _period: Period;
  private _issuer: Reference<Organization>;
  private _identifier: Identifier[];

  setCode(code: CodeableConcept): PractitionerQualificationBuilder {
    this._code = code;

    return this;
  }

  setPeriod(period: Period): PractitionerQualificationBuilder {
    this._period = period;

    return this;
  }

  setIssuer(issuer: Reference<Organization>): PractitionerQualificationBuilder {
    if (issuer.reference) {
      if (typeof issuer.reference !== 'string') {
        issuer = new Reference<Organization>(issuer);
      }
    }
    this._issuer = issuer;

    return this;
  }

  addIdentifier(identifier: Identifier): PractitionerQualificationBuilder {
    this._identifier = this._identifier || [];
    this._identifier.push(identifier);
    return this;
  }

  setMultipleIdentifier(identifier: Identifier[]): PractitionerQualificationBuilder {
    this._identifier = identifier;
    return this;
  }

  getIdentifier(index: number) {
    this._identifier = this._identifier || [];
    return {
      get: () => this._identifier[index],
      set: (value: Identifier) => this.setIdentifier(index, value),
    };
  }

  setIdentifier(index: number, identifier: Identifier): PractitionerQualificationBuilder {
    this._identifier[index] = identifier;
    return this;
  }

  build(): PractitionerQualification {
    return new PractitionerQualification({
      code: this._code,
      issuer: this._issuer,
      identifier: this._identifier,
      period: this._period,
    });
  }
}
