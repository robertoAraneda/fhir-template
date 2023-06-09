import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable, IElement, IReference } from '../../interfaces/base';
import { IPersonLink } from '../../interfaces/backbones';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';

export class PersonLinkBuilder
  extends BackboneElementBuilder<PersonLinkBuilder>
  implements IBuildable<IPersonLink>, ISerializable
{
  private readonly personLink: IPersonLink;

  constructor() {
    super();
    this.personLink = {} as IPersonLink;
  }

  addPersonLinkParamExtension(param: 'assurance', extension: IElement): PersonLinkBuilder {
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

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  build(): IPersonLink {
    return JSON.parse(this.serialize());
  }

  raw(): IPersonLink {
    return {
      ...this.personLink,
      ...super.entity(),
    };
  }
}
