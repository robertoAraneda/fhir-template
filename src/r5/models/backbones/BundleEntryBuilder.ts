import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBundleEntryRequest, IBundleEntryResponse, IBundleEntrySearch, IBundleLink } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ParseResourceTypeR5, ResourceTypeR5 } from '../../GlobalResourceTypes';
import { IBuildable } from '../../../globals/interfaces';
import BundleEntry from './BundleEntry';
import { IElementBuilder } from '../base/ElementBuilder';

export interface IBundleEntryBuilder
  extends IBuildable<BundleEntry>,
    IBackboneElementBuilder<BundleEntryBuilder>,
    IElementBuilder<BundleEntryBuilder> {
  addParamExtension(param: 'fullUrl', extension: IElement): BundleEntryBuilder;

  addLink(link: IBundleLink): BundleEntryBuilder;

  setMultipleLink(links: IBundleLink[]): BundleEntryBuilder;

  setFullUrl(fullUrl: string): BundleEntryBuilder;

  setResource<T extends ResourceTypeR5>(
    resourceType: ResourceTypeR5,
    resourceData: ParseResourceTypeR5<T>,
  ): BundleEntryBuilder;

  setSearch(search: IBundleEntrySearch): BundleEntryBuilder;

  setRequest(request: IBundleEntryRequest): BundleEntryBuilder;

  setResponse(response: IBundleEntryResponse): BundleEntryBuilder;
}

export class BundleEntryBuilder extends BackboneElementBuilder<BundleEntryBuilder> implements IBundleEntryBuilder {
  private readonly bundleEntry: BundleEntry;

  constructor() {
    super();
    this.bundleEntry = new BundleEntry();
  }

  addLink(link: IBundleLink): BundleEntryBuilder {
    this.bundleEntry.link = this.bundleEntry.link || [];
    this.bundleEntry.link.push(link);
    return this;
  }

  addParamExtension(param: 'fullUrl', extension: IElement): BundleEntryBuilder {
    this.bundleEntry[`_${param}`] = extension;
    return this;
  }

  build(): BundleEntry {
    Object.assign(this.bundleEntry, { ...super.entity() });
    return this.bundleEntry.toJson();
  }

  setFullUrl(fullUrl: string): BundleEntryBuilder {
    this.bundleEntry.fullUrl = fullUrl;
    return this;
  }

  setMultipleLink(links: IBundleLink[]): BundleEntryBuilder {
    this.bundleEntry.link = links;
    return this;
  }

  setRequest(request: IBundleEntryRequest): BundleEntryBuilder {
    this.bundleEntry.request = request;
    return this;
  }

  setResource<T extends ResourceTypeR5>(resourceType: T, resourceData: ParseResourceTypeR5<T>): BundleEntryBuilder {
    this.bundleEntry.resource = resourceData;
    return this;
  }

  setResponse(response: IBundleEntryResponse): BundleEntryBuilder {
    this.bundleEntry.response = response;
    return this;
  }

  setSearch(search: IBundleEntrySearch): BundleEntryBuilder {
    this.bundleEntry.search = search;
    return this;
  }
}
