import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleLink from './BundleLink';
import BundleLinkRelationEnum from '../../enums/BundleLinkRelationEnum';
import BundleLinkRelationType from '../../types/BundleLinkRelationType';
import { IBundleLink } from '../../interfaces/backbones';

export interface IBundleLinkBuilder
  extends IBuildable<BundleLink>,
    IBackboneElementBuilder<BundleLinkBuilder>,
    IElementBuilder<BundleLinkBuilder> {
  addParamExtension(param: 'relation' | 'url', extension: IElement): this;

  setRelation(relation: BundleLinkRelationEnum | BundleLinkRelationType): this;

  setUrl(url: string): this;
}

export class BundleLinkBuilder extends BackboneElementBuilder<BundleLinkBuilder> implements IBundleLinkBuilder {
  private readonly bundleLink: IBundleLink;

  constructor() {
    super();
    this.bundleLink = {} as IBundleLink;
  }

  addParamExtension(param: 'relation' | 'url', extension: IElement): this {
    this.bundleLink[`_${param}`] = extension;
    return this;
  }

  build(): BundleLink {
    Object.assign(this.bundleLink, { ...super.entity() });
    return new BundleLink(this.bundleLink).toJson();
  }

  setRelation(relation: BundleLinkRelationEnum | BundleLinkRelationType): this {
    this.bundleLink.relation = relation;
    return this;
  }

  setUrl(url: string): this {
    this.bundleLink.url = url;
    return this;
  }
}
