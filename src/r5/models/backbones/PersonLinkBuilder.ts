import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IReference } from '../../interfaces/datatypes';
import { PersonLink } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

interface IPersonLinkBuilder
  extends IBuildable<PersonLink>,
    IBackboneElementBuilder<PersonLinkBuilder>,
    IElementBuilder<PersonLinkBuilder> {
  addParamExtension(param: 'assurance', extension: IElement): PersonLinkBuilder;

  setTarget(target: IReference): PersonLinkBuilder;

  setAssurance(assurance: IdentityAssuranceLevelEnum | IdentityAssuranceLevelType): PersonLinkBuilder;
}

export default class PersonLinkBuilder extends BackboneElementBuilder<PersonLinkBuilder> implements IPersonLinkBuilder {
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
