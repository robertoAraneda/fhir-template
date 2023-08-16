import { IBundleEntrySearch } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { BundleEntrySearchBuilder } from './BundleEntrySearchBuilder';
import { IElement } from '../../interfaces/base';
import { bundleEntrySearchAttributes, BundleEntrySearchValidator } from './BundleEntrySearchValidator';

export default class BundleEntrySearch extends BackboneElement implements IBundleEntrySearch {
  // BundleEntrySearchBuilder attributes
  mode?: string;
  score?: number;

  // Extensions of bundle entry search attributes
  _mode?: IElement;
  _score?: IElement;

  toJson(): BundleEntrySearch {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `BundleEntrySearch${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `BundleEntrySearch${JSON.stringify(this.toJson())}`;
  }

  static builder(): BundleEntrySearchBuilder {
    return new BundleEntrySearchBuilder();
  }

  static getAttributes(): readonly string[] {
    return bundleEntrySearchAttributes;
  }

  constructor(args: IBundleEntrySearch) {
    super();
    BundleEntrySearchValidator(args);
    Object.assign(this, args);
  }
}
