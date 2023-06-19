import { IBundleLink } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { BundleLinkBuilder, IBundleLinkBuilder } from './BundleLinkBuilder';

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
