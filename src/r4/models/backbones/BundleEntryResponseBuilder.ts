import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IBundleEntryResponse } from '../../interfaces/backbones';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';

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

export class BundleEntryResponseBuilder
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
