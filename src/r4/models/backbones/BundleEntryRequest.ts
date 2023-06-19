import BackboneElement from '../base/BackboneElement';
import { IBundleEntryRequest } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { BundleEntryRequestMethodType } from '../../types';
import { BundleEntryRequestMethodEnum } from '../../enums';
import { BundleEntryRequestBuilder, IBundleEntryRequestBuilder } from './BundleEntryRequestBuilder';

export default class BundleEntryRequest extends BackboneElement implements IBundleEntryRequest {
  // BundleEntryRequest attributes
  ifMatch: string;
  ifModifiedSince: string;
  ifNoneExist: string;
  ifNoneMatch: string;
  method: BundleEntryRequestMethodType | BundleEntryRequestMethodEnum;
  url: string;

  // Extensions of bundle entry request attributes
  _ifMatch: IElement;
  _ifModifiedSince: IElement;
  _ifNoneExist: IElement;
  _ifNoneMatch: IElement;
  _method: IElement;
  _url: IElement;

  static builder(): IBundleEntryRequestBuilder {
    return new BundleEntryRequestBuilder();
  }

  constructor(args?: IBundleEntryRequest) {
    super();
    Object.assign(this, args);
  }
}
