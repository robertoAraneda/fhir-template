import { IPatientLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { IPatientLinkBuilder, PatientLinkBuilder } from './PatientLinkBuilder';

export default class PatientLink extends BackboneElement implements IPatientLink {
  // PatientLink attributes
  other: IReference;
  type: LinkTypeEnum | LinkTypeType;
  _type?: IElement;

  static builder(): IPatientLinkBuilder {
    return new PatientLinkBuilder();
  }

  constructor(args?: IPatientLink) {
    super();
    Object.assign(this, args);
  }
}
