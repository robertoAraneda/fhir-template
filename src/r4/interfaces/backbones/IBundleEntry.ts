import { IBackboneElement, IElement, IResource } from '../base';
import { IBundleLink } from './IBundleLink';
import { IBundleEntrySearch } from './IBundleEntrySearch';
import { IBundleEntryRequest } from './IBundleEntryRequest';
import { IBundleEntryResponse } from './IBundleEntryResponse';
import { ISignature } from '../datatypes';

export interface IBundleEntry extends IBackboneElement {
  link?: IBundleLink[];
  fullUrl?: string;
  resource?: any;
  search?: IBundleEntrySearch;
  request?: IBundleEntryRequest;
  response?: IBundleEntryResponse;

  _fullUrl?: IElement;
}
