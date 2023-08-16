import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
} from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ParseResourceTypeR4, ResourceTypeR4 } from '../../GlobalResourceTypes';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleEntry from './BundleEntry';

interface IBundleEntryBuilder
  extends IBuildable<BundleEntry>,
    IBackboneElementBuilder<BundleEntryBuilder>,
    IElementBuilder<BundleEntryBuilder> {
  addParamExtension(param: 'fullUrl', extension: IElement): BundleEntryBuilder;

  addLink(link: IBundleLink): BundleEntryBuilder;

  setMultipleLink(links: IBundleLink[]): BundleEntryBuilder;

  setFullUrl(fullUrl: string): BundleEntryBuilder;

  setResource<T extends ResourceTypeR4>(
    resourceType: ResourceTypeR4,
    resourceData: ParseResourceTypeR4<T>,
  ): BundleEntryBuilder;

  setSearch(search: IBundleEntrySearch): BundleEntryBuilder;

  setRequest(request: IBundleEntryRequest): BundleEntryBuilder;

  setResponse(response: IBundleEntryResponse): BundleEntryBuilder;
}

export class BundleEntryBuilder extends BackboneElementBuilder<BundleEntryBuilder> implements IBundleEntryBuilder {
  private readonly bundleEntry: IBundleEntry;

  constructor() {
    super();
    this.bundleEntry = {} as IBundleEntry;
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
    return new BundleEntry(this.bundleEntry).toJson();
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

  setResource<T extends ResourceTypeR4>(resourceType: T, resourceData: ParseResourceTypeR4<T>): BundleEntryBuilder {
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
