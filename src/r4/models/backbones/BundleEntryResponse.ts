import BackboneElement from '../base/BackboneElement';
import { IBundleEntryResponse } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { BundleEntryResponseBuilder, IBundleEntryResponseBuilder } from './BundleEntryResponseBuilder';

export default class BundleEntryResponse extends BackboneElement implements IBundleEntryResponse {
  // BundleEntryResponse attributes
  etag?: string;
  outcome?: any;
  lastModified?: string;
  location?: string;
  status: string;

  // Extensions of bundle entry response attributes
  _etag?: IElement;
  _lastModified?: IElement;
  _location?: IElement;
  _status: IElement;

  static builder(): IBundleEntryResponseBuilder {
    return new BundleEntryResponseBuilder();
  }

  constructor(args?: IBundleEntryResponse) {
    super();
    Object.assign(this, args);
  }
}
