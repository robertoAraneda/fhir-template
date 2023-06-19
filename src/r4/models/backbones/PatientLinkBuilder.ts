import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import PatientLink from './PatientLink';

export interface IPatientLinkBuilder
  extends IBuildable<PatientLink>,
    IBackboneElementBuilder<PatientLinkBuilder>,
    IElementBuilder<PatientLinkBuilder> {
  addParamExtension(param: 'type', extension: IElement): PatientLinkBuilder;

  setOther(other: IReference): PatientLinkBuilder;

  setType(type: LinkTypeEnum | LinkTypeType): PatientLinkBuilder;
}

export class PatientLinkBuilder extends BackboneElementBuilder<PatientLinkBuilder> implements IPatientLinkBuilder {
  private readonly patientLink: PatientLink;

  constructor() {
    super();
    this.patientLink = new PatientLink();
  }

  addParamExtension(param: 'type', extension: IElement): PatientLinkBuilder {
    this.patientLink[`_${param}`] = extension;
    return this;
  }

  setOther(other: IReference): PatientLinkBuilder {
    this.patientLink.other = other;
    return this;
  }

  setType(type: LinkTypeEnum | LinkTypeType): PatientLinkBuilder {
    this.patientLink.type = type;
    return this;
  }

  build(): PatientLink {
    Object.assign(this.patientLink, { ...super.entity() });
    return this.patientLink.toJson();
  }
}
