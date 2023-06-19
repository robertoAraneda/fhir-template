import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBundleEntryRequest } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { BundleEntryRequestMethodEnum } from '../../enums';
import { BundleEntryRequestMethodType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';

type ParamExtensionType = 'method' | 'url' | 'ifNoneMatch' | 'ifModifiedSince' | 'ifMatch' | 'ifNoneExist';

export interface IBundleEntryRequestBuilder
  extends IBuildable<IBundleEntryRequest>,
    ISerializable,
    IBackboneElementBuilder<IBundleEntryRequestBuilder>,
    IElementBuilder<IBundleEntryRequestBuilder> {
  addParamExtension(param: ParamExtensionType, extension: IElement): this;

  setMethod(method: string): this;

  setUrl(url: string): this;

  setIfNoneMatch(ifNoneMatch: string): this;

  setIfModifiedSince(ifModifiedSince: string): this;

  setIfMatch(ifMatch: string): this;

  setIfNoneExist(ifNoneExist: string): this;
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

  addParamExtension(param: ParamExtensionType, extension: IElement): this {
    this.bundleEntryRequest[`_${param}`] = extension;
    return this;
  }

  build(): IBundleEntryRequest {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IBundleEntryRequest {
    return {
      ...this.bundleEntryRequest,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  setIfMatch(ifMatch: string): this {
    this.bundleEntryRequest.ifMatch = ifMatch;
    return this;
  }

  setIfModifiedSince(ifModifiedSince: string): this {
    this.bundleEntryRequest.ifModifiedSince = ifModifiedSince;
    return this;
  }

  setIfNoneExist(ifNoneExist: string): this {
    this.bundleEntryRequest.ifNoneExist = ifNoneExist;
    return this;
  }

  setIfNoneMatch(ifNoneMatch: string): this {
    this.bundleEntryRequest.ifNoneMatch = ifNoneMatch;
    return this;
  }

  setMethod(method: BundleEntryRequestMethodEnum | BundleEntryRequestMethodType): this {
    this.bundleEntryRequest.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.bundleEntryRequest.url = url;
    return this;
  }
}
