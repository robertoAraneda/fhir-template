import { IElement, IResource } from '../../interfaces/base';
import {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
} from '../../interfaces/backbones';
import BackboneElement from '../base/BackboneElement';
import { BundleEntryBuilder, IBundleEntryBuilder } from './BundleEntryBuilder';

export default class BundleEntry extends BackboneElement implements IBundleEntry {
  // BundleEntry attributes
  fullUrl: string;
  link: IBundleLink[];
  request: IBundleEntryRequest;
  resource: IResource extends infer R ? R : never;
  response: IBundleEntryResponse;
  search: IBundleEntrySearch;

  // Extensions of bundle entry attributes
  _fullUrl?: IElement;

  // TODO: check if this is correct
  static builder(): IBundleEntryBuilder {
    return new BundleEntryBuilder();
  }

  constructor(args?: IBundleEntry) {
    super();
    Object.assign(this, args);
  }
}
