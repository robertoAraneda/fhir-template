import { Reference } from '../datatypes/Reference';
import { Patient } from '../resources/Patient';
import { PatientLink } from '../datatypes/PatientLink';
import { LinkType } from '../enumerators/LinkType';
import { LinkTypeType } from '../types/LinkTypeType';

export class PatientLinkBuilder {
  private _other: Reference<Patient>;
  private _type: LinkType | LinkTypeType;

  getOther(): Reference<Patient> {
    return this._other;
  }

  setOther(value: Reference<Patient>): PatientLinkBuilder {
    this._other = value;
    return this;
  }

  getType(): string {
    return this._type;
  }

  setType(value: LinkTypeType | LinkType): PatientLinkBuilder {
    this._type = value;
    return this;
  }

  build(): PatientLink {
    return new PatientLink({
      other: this._other,
      type: this._type,
    });
  }
}
