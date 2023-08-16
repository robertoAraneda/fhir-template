import { IBundleLink } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import { BundleLinkBuilder } from './BundleLinkBuilder';
import { bundleLinkAttributes, BundleLinkValidator } from './BundleLinkValidator';

export default class BundleLink extends BackboneElement implements IBundleLink {
  // BundleLink attributes
  relation?: string;
  url?: string;

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
  static getAttributes(): readonly string[] {
    return bundleLinkAttributes;
  }

  static builder(): BundleLinkBuilder {
    return new BundleLinkBuilder();
  }

  constructor(args: IBundleLink) {
    super();
    BundleLinkValidator(args);
    Object.assign(this, args);
  }
}
