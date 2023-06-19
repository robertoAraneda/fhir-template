import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IPatientLink } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';

export interface IPatientLinkBuilder
  extends IBuildable<IPatientLink>,
    ISerializable,
    IBackboneElementBuilder<IPatientLinkBuilder>,
    IElementBuilder<IPatientLinkBuilder> {
  addParamExtension(param: 'type', extension: IElement): this;

  setOther(other: IReference): this;

  setType(type: LinkTypeEnum | LinkTypeType): this;
}

export class PatientLinkBuilder extends BackboneElementBuilder<PatientLinkBuilder> implements IPatientLinkBuilder {
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

  build(): IPatientLink {
    return JSON.parse(JSON.stringify(this.compileAsDefault()));
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  compileAsDefault(): IPatientLink {
    return {
      ...this.patientLink,
      ...super.entity(),
    };
  }
}
