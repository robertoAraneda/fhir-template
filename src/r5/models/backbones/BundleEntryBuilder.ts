import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
} from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ParseResourceTypeR5, ResourceTypeR5 } from '../../GlobalResourceTypes';
import { IBuildable } from '../../../globals/interfaces';
import BundleEntry from './BundleEntry';
import { IElementBuilder } from '../base/ElementBuilder';

export interface IBundleEntryBuilder
  extends IBuildable<BundleEntry>,
    IBackboneElementBuilder<BundleEntryBuilder>,
    IElementBuilder<BundleEntryBuilder> {
  addParamExtension(param: 'fullUrl', extension: IElement): this;

  addLink(link: IBundleLink): this;

  setMultipleLink(links: IBundleLink[]): this;

  setFullUrl(fullUrl: string): this;

  setResource<T extends ResourceTypeR5>(resourceType: ResourceTypeR5, resourceData: ParseResourceTypeR5<T>): this;

  setSearch(search: IBundleEntrySearch): this;

  setRequest(request: IBundleEntryRequest): this;

  setResponse(response: IBundleEntryResponse): this;
}

export class BundleEntryBuilder extends BackboneElementBuilder<BundleEntryBuilder> implements IBundleEntryBuilder {
  private readonly bundleEntry: IBundleEntry;

  constructor() {
    super();
    this.bundleEntry = {} as IBundleEntry;
  }

  addLink(link: IBundleLink): this {
    this.bundleEntry.link = this.bundleEntry.link || [];
    this.bundleEntry.link.push(link);
    return this;
  }

  addParamExtension(param: 'fullUrl', extension: IElement): this {
    this.bundleEntry[`_${param}`] = extension;
    return this;
  }

  build(): BundleEntry {
    Object.assign(this.bundleEntry, { ...super.entity() });
    return new BundleEntry(this.bundleEntry).toJson();
  }

  setFullUrl(fullUrl: string): this {
    this.bundleEntry.fullUrl = fullUrl;
    return this;
  }

  setMultipleLink(links: IBundleLink[]): this {
    this.bundleEntry.link = links;
    return this;
  }

  setRequest(request: IBundleEntryRequest): this {
    this.bundleEntry.request = request;
    return this;
  }

  setResource<T extends ResourceTypeR5>(resourceType: T, resourceData: ParseResourceTypeR5<T>): this {
    this.bundleEntry.resource = resourceData;
    return this;
  }

  setResponse(response: IBundleEntryResponse): this {
    this.bundleEntry.response = response;
    return this;
  }

  setSearch(search: IBundleEntrySearch): this {
    this.bundleEntry.search = search;
    return this;
  }
}
