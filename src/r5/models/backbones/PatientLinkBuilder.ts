import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IReference } from '../../interfaces/datatypes';
import { PatientLink } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IElementBuilder } from '../base/ElementBuilder';
import { IPatientLink } from '../../interfaces/backbones';

interface IPatientLinkBuilder
  extends IBuildable<PatientLink>,
    IBackboneElementBuilder<PatientLinkBuilder>,
    IElementBuilder<PatientLinkBuilder> {
  addParamExtension(param: 'type', extension: IElement): this;

  setOther(other: IReference): this;

  setType(type: LinkTypeEnum | LinkTypeType): this;
}
export default class PatientLinkBuilder
  extends BackboneElementBuilder<PatientLinkBuilder>
  implements IPatientLinkBuilder
{
  private readonly patientLink: IPatientLink;

  constructor() {
    super();
    this.patientLink = {} as IPatientLink;
  }

  addParamExtension(param: 'type', extension: IElement): this {
    this.patientLink[`_${param}`] = extension;
    return this;
  }

  setOther(other: IReference): this {
    this.patientLink.other = other;
    return this;
  }

  setType(type: LinkTypeEnum | LinkTypeType): this {
    this.patientLink.type = type;
    return this;
  }

  build(): PatientLink {
    Object.assign(this.patientLink, { ...super.entity() });
    return new PatientLink(this.patientLink).toJson();
  }
}
