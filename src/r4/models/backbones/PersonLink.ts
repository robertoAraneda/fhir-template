import { IPersonLink } from '../../interfaces/backbones';
import { IReference } from '../../interfaces/datatypes';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import BackboneElement from './BackboneElement';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class PersonLink extends BackboneElement implements IPersonLink {
  // PersonLink attributes
  assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType;
  target: IReference;
  _assurance: IElement;

  static builder(): IPersonLinkBuilder {
    return new PersonLinkBuilder();
  }

  constructor(args?: IPersonLink) {
    super();
    Object.assign(this, args);
  }
}

export interface IPersonLinkBuilder
  extends IBuildable<IPersonLink>,
    ISerializable,
    IBackboneElementBuilder<IPersonLinkBuilder>,
    IElementBuilder<IPersonLinkBuilder> {
  addParamExtension(param: 'assurance', extension: IElement): this;
  setTarget(target: IReference): this;
  setAssurance(assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType): this;
}
class PersonLinkBuilder extends BackboneElementBuilder<PersonLinkBuilder> implements IPersonLinkBuilder {
  private readonly personLink: IPersonLink;

  constructor() {
    super();
    this.personLink = {} as IPersonLink;
  }

  addParamExtension(param: 'assurance', extension: IElement): this {
    this.personLink[`_${param}`] = extension;
    return this;
  }

  setTarget(target: IReference): this {
    this.personLink.target = target;
    return this;
  }

  setAssurance(assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType): this {
    this.personLink.assurance = assurance;
    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IPersonLink {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IPersonLink {
    return {
      ...this.personLink,
      ...super.entity(),
    };
  }
}
