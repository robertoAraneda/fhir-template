import { IElement, IResource } from '../../interfaces/base';
import {
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleEntryRequest,
  IBundleLink,
  IBundleEntry,
} from '../../interfaces/backbones';
import BackboneElement from './BackboneElement';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ParseResourceTypeR4, ResourceTypeR4 } from '../../GlobalResourceTypes';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class BundleEntry extends BackboneElement implements IBundleEntry {
  // BundleEntry attributes
  fullUrl: string;
  link: IBundleLink[];
  request: IBundleEntryRequest;
  resource: IResource extends infer R ? R : never;
  response: IBundleEntryResponse;
  search: IBundleEntrySearch;

  // Extensions of bundle entry attributes
  _fullUrl?: IElement;

  // TODO: check if this is correct
  static builder(): IBundleEntryBuilder {
    return new BundleEntryBuilder();
  }

  constructor(args?: IBundleEntry) {
    super();
    Object.assign(this, args);
  }
}

export interface IBundleEntryBuilder
  extends IBuildable<IBundleEntry>,
    ISerializable,
    IBackboneElementBuilder<IBundleEntryBuilder>,
    IElementBuilder<IBundleEntryBuilder> {
  addParamExtension(param: 'fullUrl', extension: IElement): this;
  addLink(link: IBundleLink): this;
  setMultipleLink(links: IBundleLink[]): this;
  setFullUrl(fullUrl: string): this;
  setResource<T extends ResourceTypeR4>(resourceType: ResourceTypeR4, resourceData: ParseResourceTypeR4<T>): this;
  setSearch(search: IBundleEntrySearch): this;
  setRequest(request: IBundleEntryRequest): this;
  setResponse(response: IBundleEntryResponse): this;
}

class BundleEntryBuilder extends BackboneElementBuilder<BundleEntryBuilder> implements IBundleEntryBuilder {
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

  build(): IBundleEntry {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IBundleEntry {
    return {
      ...this.bundleEntry,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
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

  setResource<T extends ResourceTypeR4>(resourceType: T, resourceData: ParseResourceTypeR4<T>): this {
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
