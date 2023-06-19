import BackboneElement from './BackboneElement';
import { IBundleEntryRequest } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { BundleEntryRequestMethodType } from '../../types';
import { BundleEntryRequestMethodEnum } from '../../enums';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

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
class BundleEntryRequestBuilder
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
