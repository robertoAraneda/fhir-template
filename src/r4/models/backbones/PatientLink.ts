import { IPatientLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { LinkTypeEnum } from '../../enums';
import { LinkTypeType } from '../../types';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';
import BackboneElement from './BackboneElement';

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

export interface IPatientLinkBuilder
  extends IBuildable<IPatientLink>,
    ISerializable,
    IBackboneElementBuilder<IPatientLinkBuilder>,
    IElementBuilder<IPatientLinkBuilder> {
  addParamExtension(param: 'type', extension: IElement): this;
  setOther(other: IReference): this;
  setType(type: LinkTypeEnum | LinkTypeType): this;
}
class PatientLinkBuilder extends BackboneElementBuilder<PatientLinkBuilder> implements IPatientLinkBuilder {
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
