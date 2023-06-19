import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IReference } from '../../interfaces/datatypes';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import PersonLink from './PersonLink';

export interface IPersonLinkBuilder
  extends IBuildable<PersonLink>,
    IBackboneElementBuilder<PersonLinkBuilder>,
    IElementBuilder<PersonLinkBuilder> {
  addParamExtension(param: 'assurance', extension: IElement): PersonLinkBuilder;

  setTarget(target: IReference): PersonLinkBuilder;

  setAssurance(assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType): PersonLinkBuilder;
}

export class PersonLinkBuilder extends BackboneElementBuilder<PersonLinkBuilder> implements IPersonLinkBuilder {
  private readonly personLink: PersonLink;

  constructor() {
    super();
    this.personLink = new PersonLink();
  }

  addParamExtension(param: 'assurance', extension: IElement): PersonLinkBuilder {
    this.personLink[`_${param}`] = extension;
    return this;
  }

  setTarget(target: IReference): PersonLinkBuilder {
    this.personLink.target = target;
    return this;
  }

  setAssurance(assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType): PersonLinkBuilder {
    this.personLink.assurance = assurance;
    return this;
  }

  build(): PersonLink {
    Object.assign(this.personLink, { ...super.entity() });
    return this.personLink.toJson();
  }
}
