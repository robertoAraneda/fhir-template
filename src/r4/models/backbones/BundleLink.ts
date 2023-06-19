import { IBundleLink } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from './BackboneElement';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class BundleLink extends BackboneElement implements IBundleLink {
  // BundleLink attributes
  relation: string;
  url: string;

  // Extensions of bundle link attributes
  _relation: IElement;
  _url: IElement;

  static builder(): IBundleLinkBuilder {
    return new BundleLinkBuilder();
  }

  constructor(args?: IBundleLink) {
    super();
    Object.assign(this, args);
  }
}

export interface IBundleLinkBuilder
  extends IBuildable<IBundleLink>,
    ISerializable,
    IBackboneElementBuilder<IBundleLinkBuilder>,
    IElementBuilder<IBundleLinkBuilder> {
  addParamExtension(param: 'relation' | 'url', extension: IElement): BundleLinkBuilder;
  setRelation(relation: string): BundleLinkBuilder;
  setUrl(url: string): BundleLinkBuilder;
}
class BundleLinkBuilder extends BackboneElementBuilder<BundleLinkBuilder> implements IBundleLinkBuilder {
  private readonly bundleLink: IBundleLink;
  constructor() {
    super();
    this.bundleLink = {} as IBundleLink;
  }

  addParamExtension(param: 'relation' | 'url', extension: IElement): BundleLinkBuilder {
    this.bundleLink[`_${param}`] = extension;
    return this;
  }

  build(): IBundleLink {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IBundleLink {
    return {
      ...this.bundleLink,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
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
