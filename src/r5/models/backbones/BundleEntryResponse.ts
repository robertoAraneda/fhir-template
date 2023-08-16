import BackboneElement from '../base/BackboneElement';
import { IBundleEntryResponse } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { BundleEntryResponseBuilder } from './BundleEntryResponseBuilder';
import { BundleEntryResponseValidator } from './BundleEntryResponseValidator';

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

  toJson(): BundleEntryResponse {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `BundleEntryResponse${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `BundleEntryResponse${JSON.stringify(this.toJson())}`;
  }

  static builder(): BundleEntryResponseBuilder {
    return new BundleEntryResponseBuilder();
  }

  constructor(args: IBundleEntryResponse) {
    super();
    BundleEntryResponseValidator(args);
    Object.assign(this, args);
  }
}
