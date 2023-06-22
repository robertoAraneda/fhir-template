import { IBuildable } from '../../../globals/interfaces';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import BundleEntryResponse from './BundleEntryResponse';

type ParamExtensionType = 'status' | 'location' | 'etag' | 'lastModified';

export interface IBundleEntryResponseBuilder
  extends IBuildable<BundleEntryResponse>,
    IBackboneElementBuilder<BundleEntryResponseBuilder>,
    IElementBuilder<BundleEntryResponseBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): BundleEntryResponseBuilder;

  setStatus(status: string): BundleEntryResponseBuilder;

  setLocation(location: string): BundleEntryResponseBuilder;

  setEtag(etag: string): BundleEntryResponseBuilder;

  setLastModified(lastModified: string): BundleEntryResponseBuilder;

  setOutcome(outcome: any): BundleEntryResponseBuilder;
}

export class BundleEntryResponseBuilder
  extends BackboneElementBuilder<BundleEntryResponseBuilder>
  implements IBundleEntryResponseBuilder
{
  private readonly bundleEntryResponse: BundleEntryResponse;

  constructor() {
    super();
    this.bundleEntryResponse = new BundleEntryResponse();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): BundleEntryResponseBuilder {
    this.bundleEntryResponse[`_${param}`] = extension;
    return this;
  }

  build(): BundleEntryResponse {
    Object.assign(this.bundleEntryResponse, { ...super.entity() });
    return this.bundleEntryResponse.toJson();
  }

  setEtag(etag: string): BundleEntryResponseBuilder {
    this.bundleEntryResponse.etag = etag;
    return this;
  }

  setLastModified(lastModified: string): BundleEntryResponseBuilder {
    this.bundleEntryResponse.lastModified = lastModified;
    return this;
  }

  setLocation(location: string): BundleEntryResponseBuilder {
    this.bundleEntryResponse.location = location;
    return this;
  }

  setOutcome(outcome: any): BundleEntryResponseBuilder {
    this.bundleEntryResponse.outcome = outcome;
    return this;
  }

  setStatus(status: string): BundleEntryResponseBuilder {
    this.bundleEntryResponse.status = status;
    return this;
  }
}
