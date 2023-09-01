import { IPatientLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { PatientLinkBuilder } from './PatientLinkBuilder';
import { PatientLinkValidator } from './PatientLinkValidator';

export default class PatientLink extends BackboneElement implements IPatientLink {
  // PatientLink attributes
  other: IReference;
  type?: LinkTypeEnum | LinkTypeType;
  _type?: IElement;

  toJson(): PatientLink {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PatientLink${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PatientLink${JSON.stringify(this.toJson())}`;
  }

  static builder(): PatientLinkBuilder {
    return new PatientLinkBuilder();
  }

  constructor(args: IPatientLink) {
    super();
    PatientLinkValidator(args);
    Object.assign(this, args);
  }
}
