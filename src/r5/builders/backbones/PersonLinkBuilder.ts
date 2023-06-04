import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Buildable, Serializable, Element, Reference } from '../../interfaces/base';
import { PersonLink } from '../../interfaces/backbones';
import { IdentityAssuranceLevel } from '../../enums/IdentityAssuranceLevel';
import { IdentityAssuranceLevelType } from '../../types/IdentityAssuranceLevelType';

export class PersonLinkBuilder
  extends BackboneElementBuilder<PersonLinkBuilder>
  implements Buildable<PersonLink>, Serializable
{
  private readonly personLink: PersonLink;

  constructor() {
    super();
    this.personLink = {} as PersonLink;
  }

  addPersonLinkParamExtension(param: 'assurance', extension: Element): PersonLinkBuilder {
    this.personLink[`_${param}`] = extension;
    return this;
  }

  setTarget(target: Reference): PersonLinkBuilder {
    this.personLink.target = target;
    return this;
  }

  setAssurance(assurance: IdentityAssuranceLevel | IdentityAssuranceLevelType): PersonLinkBuilder {
    this.personLink.assurance = assurance;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  build(): PersonLink {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): PersonLink {
    return {
      ...this.personLink,
      ...super.entity(),
    };
  }
}
