import { IBundleEntrySearch } from '../../interfaces/backbones';
import { IExtension } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import { BundleEntrySearchBuilder } from './BundleEntrySearchBuilder';
import { IElement } from '../../interfaces/base';

export default class BundleEntrySearch extends BackboneElement implements IBundleEntrySearch {
  // BundleEntrySearchBuilder attributes
  mode: string;
  score: number;

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

  constructor(args?: IBundleEntrySearch) {
    super();
    Object.assign(this, args);
  }
}
