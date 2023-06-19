import BackboneElement from './BackboneElement';
import { IBundleEntryResponse } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

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

type ParamExtensionType = 'status' | 'location' | 'etag' | 'lastModified';
export interface IBundleEntryResponseBuilder
  extends IBuildable<IBundleEntryResponse>,
    ISerializable,
    IBackboneElementBuilder<IBundleEntryResponseBuilder>,
    IElementBuilder<IBundleEntryResponseBuilder> {
  addParamExtension(param: ParamExtensionType, extension: IElement): this;
  setStatus(status: string): this;
  setLocation(location: string): this;
  setEtag(etag: string): this;
  setLastModified(lastModified: string): this;
  setOutcome(outcome: any): this;
}
class BundleEntryResponseBuilder
  extends BackboneElementBuilder<BundleEntryResponseBuilder>
  implements IBundleEntryResponseBuilder
{
  private readonly bundleEntryResponse: IBundleEntryResponse;
  constructor() {
    super();
    this.bundleEntryResponse = {} as IBundleEntryResponse;
  }

  addParamExtension(param: ParamExtensionType, extension: IElement): this {
    this.bundleEntryResponse[`_${param}`] = extension;
    return this;
  }

  build(): IBundleEntryResponse {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IBundleEntryResponse {
    return {
      ...this.bundleEntryResponse,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  setEtag(etag: string): this {
    this.bundleEntryResponse.etag = etag;
    return this;
  }

  setLastModified(lastModified: string): this {
    this.bundleEntryResponse.lastModified = lastModified;
    return this;
  }

  setLocation(location: string): this {
    this.bundleEntryResponse.location = location;
    return this;
  }

  setOutcome(outcome: any): this {
    this.bundleEntryResponse.outcome = outcome;
    return this;
  }

  setStatus(status: string): this {
    this.bundleEntryResponse.status = status;
    return this;
  }
}
