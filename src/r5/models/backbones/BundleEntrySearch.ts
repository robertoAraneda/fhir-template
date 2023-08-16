import { IBundleEntrySearch } from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import BundleEntrySearchBuilder from './BundleEntrySearchBuilder';
import { IElement } from '../../interfaces/base';
import { BundleEntrySearchValidator } from './BundleEntrySearchValidator';
import BundleEntrySearchModeEnum from '../../enums/BundleEntrySearchModeEnum';
import BundleEntrySearchModeType from '../../types/BundleEntrySearchModeType';

export default class BundleEntrySearch extends BackboneElement implements IBundleEntrySearch {
  // BundleEntrySearchBuilder attributes
  mode: BundleEntrySearchModeEnum | BundleEntrySearchModeType;
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

  constructor(args: IBundleEntrySearch) {
    super();
    BundleEntrySearchValidator(args);
    Object.assign(this, args);
  }
}
