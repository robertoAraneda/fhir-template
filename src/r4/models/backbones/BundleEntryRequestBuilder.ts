import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { BundleEntryRequestMethodEnum } from '../../../enums';
import { BundleEntryRequestMethodType } from '../../../types';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleEntryRequest from './BundleEntryRequest';
import { IBundleEntryRequest } from '../../interfaces/backbones';

type ParamExtensionType = 'method' | 'url' | 'ifNoneMatch' | 'ifModifiedSince' | 'ifMatch' | 'ifNoneExist';

export interface IBundleEntryRequestBuilder
  extends IBuildable<BundleEntryRequest>,
    IBackboneElementBuilder<BundleEntryRequestBuilder>,
    IElementBuilder<BundleEntryRequestBuilder> {
  addParamExtension(param: ParamExtensionType, extension: IElement): BundleEntryRequestBuilder;

  setMethod(method: string): BundleEntryRequestBuilder;

  setUrl(url: string): BundleEntryRequestBuilder;

  setIfNoneMatch(ifNoneMatch: string): BundleEntryRequestBuilder;

  setIfModifiedSince(ifModifiedSince: string): BundleEntryRequestBuilder;

  setIfMatch(ifMatch: string): BundleEntryRequestBuilder;

  setIfNoneExist(ifNoneExist: string): BundleEntryRequestBuilder;
}

export class BundleEntryRequestBuilder
  extends BackboneElementBuilder<BundleEntryRequestBuilder>
  implements IBundleEntryRequestBuilder
{
  private readonly bundleEntryRequest: IBundleEntryRequest;

  constructor() {
    super();
    this.bundleEntryRequest = {} as IBundleEntryRequest;
  }

  addParamExtension(param: ParamExtensionType, extension: IElement): BundleEntryRequestBuilder {
    this.bundleEntryRequest[`_${param}`] = extension;
    return this;
  }

  build(): BundleEntryRequest {
    Object.assign(this.bundleEntryRequest, { ...super.entity() });
    return new BundleEntryRequest(this.bundleEntryRequest).toJson();
  }

  setIfMatch(ifMatch: string): BundleEntryRequestBuilder {
    this.bundleEntryRequest.ifMatch = ifMatch;
    return this;
  }

  setIfModifiedSince(ifModifiedSince: string): BundleEntryRequestBuilder {
    this.bundleEntryRequest.ifModifiedSince = ifModifiedSince;
    return this;
  }

  setIfNoneExist(ifNoneExist: string): BundleEntryRequestBuilder {
    this.bundleEntryRequest.ifNoneExist = ifNoneExist;
    return this;
  }

  setIfNoneMatch(ifNoneMatch: string): BundleEntryRequestBuilder {
    this.bundleEntryRequest.ifNoneMatch = ifNoneMatch;
    return this;
  }

  setMethod(method: BundleEntryRequestMethodEnum | BundleEntryRequestMethodType): BundleEntryRequestBuilder {
    this.bundleEntryRequest.method = method;
    return this;
  }

  setUrl(url: string): BundleEntryRequestBuilder {
    this.bundleEntryRequest.url = url;
    return this;
  }
}
