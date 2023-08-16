import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleLink from './BundleLink';
import { IBundleLink } from '../../interfaces/backbones';

export interface IBundleLinkBuilder
  extends IBuildable<BundleLink>,
    IBackboneElementBuilder<BundleLinkBuilder>,
    IElementBuilder<BundleLinkBuilder> {
  addParamExtension(param: 'relation' | 'url', element: IElement): BundleLinkBuilder;

  setRelation(relation: string): BundleLinkBuilder;

  setUrl(url: string): BundleLinkBuilder;
}

export class BundleLinkBuilder extends BackboneElementBuilder<BundleLinkBuilder> implements IBundleLinkBuilder {
  private readonly bundleLink: IBundleLink;

  constructor() {
    super();
    this.bundleLink = {} as IBundleLink;
  }

  addParamExtension(param: 'relation' | 'url', element: IElement): BundleLinkBuilder {
    this.bundleLink[`_${param}`] = element;
    return this;
  }

  build(): BundleLink {
    Object.assign(this.bundleLink, { ...super.entity() });
    return new BundleLink(this.bundleLink).toJson();
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
