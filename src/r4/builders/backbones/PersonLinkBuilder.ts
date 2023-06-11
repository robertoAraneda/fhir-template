import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IPersonLink } from '../../interfaces/backbones';
import { IdentityAssuranceLevelEnum } from '../../enums';
import { IdentityAssuranceLevelType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IReference } from '../../interfaces/datatypes';

interface IPersonLinkBuilder extends IBuildable<IPersonLink>, ISerializable {
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
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