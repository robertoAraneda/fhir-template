import { IBundleEntrySearch } from '../../interfaces/backbones';
import { IExtension } from '../../interfaces/datatypes';
import BackboneElement from '../base/BackboneElement';
import { BundleEntrySearchBuilder, IBundleEntrySearchBuilder } from './BundleEntrySearchBuilder';

export default class BundleEntrySearch extends BackboneElement implements IBundleEntrySearch {
  // BundleEntrySearchBuilder attributes
  mode: string;
  score: number;

  // Extensions of bundle entry search attributes
  _mode?: IExtension;
  _score?: IExtension;

  static builder(): IBundleEntrySearchBuilder {
    return new BundleEntrySearchBuilder();
  }

  constructor(args?: IBundleEntrySearch) {
    super();
    Object.assign(this, args);
  }
}
