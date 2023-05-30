import { Reference } from '../datatypes/Reference';
import { Patient } from '../resources/Patient';
import { PatientLink } from '../backbones/PatientLink';
import { LinkType } from '../enums/LinkType';
import { LinkTypeType } from '../types/LinkTypeType';
import { PatientLinkOtherReferenceType } from '../types/PatientTypes';

export class PatientLinkBuilder {
  private _other: Reference<PatientLinkOtherReferenceType>;
  private _type: LinkType | LinkTypeType;

  setOther(value: Reference<PatientLinkOtherReferenceType>): PatientLinkBuilder {
    this._other = value;
    return this;
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
