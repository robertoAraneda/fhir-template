import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { PersonLink } from '../../interfaces/backbones/PersonLink';
import { Serialize } from '../../interfaces/base/Serialize';
import { Reference } from '../../interfaces/base/Reference';
import { IdentityAssuranceLevel } from '../../enums/IdentityAssuranceLevel';
import { IdentityAssuranceLevelType } from '../../types/IdentityAssuranceLevelType';
import { Element } from '../../interfaces/base/Element';

export class PersonLinkBuilder
  extends BackboneElementBuilder<PersonLinkBuilder>
  implements Build<PersonLink>, Serialize
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
