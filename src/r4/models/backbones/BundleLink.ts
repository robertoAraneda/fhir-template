import { IBundleLink } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { BundleLinkBuilder } from './BundleLinkBuilder';

export default class BundleLink extends BackboneElement implements IBundleLink {
  // BundleLink attributes
  relation: string;
  url: string;

  // Extensions of bundle link attributes
  _relation: IElement;
  _url: IElement;

  toJson(): BundleLink {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `BundleLink${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `BundleLink${JSON.stringify(this.toJson())}`;
  }

  static builder(): BundleLinkBuilder {
    return new BundleLinkBuilder();
  }

  constructor(args?: IBundleLink) {
    super();
    Object.assign(this, args);
  }
}
