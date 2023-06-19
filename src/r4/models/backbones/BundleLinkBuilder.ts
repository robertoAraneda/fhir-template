import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleLink from './BundleLink';

export interface IBundleLinkBuilder
  extends IBuildable<BundleLink>,
    IBackboneElementBuilder<BundleLinkBuilder>,
    IElementBuilder<BundleLinkBuilder> {
  addParamExtension(param: 'relation' | 'url', extension: IElement): BundleLinkBuilder;

  setRelation(relation: string): BundleLinkBuilder;

  setUrl(url: string): BundleLinkBuilder;
}

export class BundleLinkBuilder extends BackboneElementBuilder<BundleLinkBuilder> implements IBundleLinkBuilder {
  private readonly bundleLink: BundleLink;

  constructor() {
    super();
    this.bundleLink = new BundleLink();
  }

  addParamExtension(param: 'relation' | 'url', extension: IElement): BundleLinkBuilder {
    this.bundleLink[`_${param}`] = extension;
    return this;
  }

  build(): BundleLink {
    Object.assign(this.bundleLink, { ...super.entity() });
    return this.bundleLink.toJson();
  }

  setRelation(relation: string): BundleLinkBuilder {
    this.bundleLink.relation = relation;
    return this;
  }

  setUrl(url: string): BundleLinkBuilder {
    this.bundleLink.url = url;
    return this;
  }
}
