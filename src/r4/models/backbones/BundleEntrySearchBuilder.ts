import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleEntrySearch from './BundleEntrySearch';
import { IBundleEntrySearch } from '../../interfaces/backbones';

export interface IBundleEntrySearchBuilder
  extends IBuildable<BundleEntrySearch>,
    IBackboneElementBuilder<BundleEntrySearchBuilder>,
    IElementBuilder<BundleEntrySearchBuilder> {
  addParamExtension(param: 'mode' | 'score', extension: IElement): BundleEntrySearchBuilder;

  setMode(mode: string): BundleEntrySearchBuilder;

  setScore(score: number): BundleEntrySearchBuilder;
}

export class BundleEntrySearchBuilder
  extends BackboneElementBuilder<BundleEntrySearchBuilder>
  implements IBundleEntrySearchBuilder
{
  private readonly bundleEntrySearch: IBundleEntrySearch;

  constructor() {
    super();
    this.bundleEntrySearch = {} as IBundleEntrySearch;
  }

  addParamExtension(param: 'mode' | 'score', extension: IElement): BundleEntrySearchBuilder {
    this.bundleEntrySearch[`_${param}`] = extension;
    return this;
  }

  build(): BundleEntrySearch {
    Object.assign(this.bundleEntrySearch, { ...super.entity() });
    return new BundleEntrySearch(this.bundleEntrySearch).toJson();
  }

  setMode(mode: string): BundleEntrySearchBuilder {
    this.bundleEntrySearch.mode = mode;
    return this;
  }

  setScore(score: number): BundleEntrySearchBuilder {
    this.bundleEntrySearch.score = score;
    return this;
  }
}
