import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IReference } from '../../interfaces/datatypes';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import PersonLink from './PersonLink';
import { IPersonLink } from '../../interfaces/backbones';

export interface IPersonLinkBuilder
  extends IBuildable<PersonLink>,
    IBackboneElementBuilder<PersonLinkBuilder>,
    IElementBuilder<PersonLinkBuilder> {
  addParamExtension(param: 'assurance', extension: IElement): this;

  setTarget(target: IReference): this;

  setAssurance(assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType): this;
}

export class PersonLinkBuilder extends BackboneElementBuilder<PersonLinkBuilder> implements IPersonLinkBuilder {
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

  build(): PersonLink {
    Object.assign(this.personLink, { ...super.entity() });
    return new PersonLink(this.personLink).toJson();
  }
}
