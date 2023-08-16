import { IElement, IResource } from '../../interfaces/base';
import {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
} from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { BundleEntryBuilder } from './BundleEntryBuilder';
import { BundleEntryValidator } from './BundleEntryValidator';

export default class BundleEntry extends BackboneElement implements IBundleEntry {
  // BundleEntry attributes
  fullUrl?: string;
  link?: IBundleLink[];
  request?: IBundleEntryRequest;
  resource?: IResource & { [key: string]: any };
  response?: IBundleEntryResponse;
  search?: IBundleEntrySearch;

  // Extensions of bundle entry attributes
  _fullUrl?: IElement;
  toJson(): BundleEntry {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `BundleEntry${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `BundleEntry${JSON.stringify(this.toJson(), null, 2)}`;
  }

  static builder(): BundleEntryBuilder {
    return new BundleEntryBuilder();
  }

  constructor(args: IBundleEntry) {
    super();
    BundleEntryValidator(args);
    Object.assign(this, args);
  }
}
