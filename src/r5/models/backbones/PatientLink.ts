import { IPatientLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import PatientLinkBuilder from './PatientLinkBuilder';

export default class PatientLink extends BackboneElement implements IPatientLink {
  // PatientLink attributes
  other: IReference;
  type: LinkTypeEnum | LinkTypeType;
  _type?: IElement;

  static builder(): PatientLinkBuilder {
    return new PatientLinkBuilder();
  }

  toJson(): PatientLink {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return ` PatientLink${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return ` PatientLink${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IPatientLink) {
    super();
    Object.assign(this, args);
  }
}
