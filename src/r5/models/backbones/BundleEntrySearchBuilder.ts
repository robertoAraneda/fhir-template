import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';
import BundleEntrySearch from './BundleEntrySearch';
import { IBundleEntrySearch } from '../../interfaces/backbones';
import BundleEntrySearchModeEnum from '../../enums/BundleEntrySearchModeEnum';
import BundleEntrySearchModeType from '../../types/BundleEntrySearchModeType';

export interface IBundleEntrySearchBuilder
  extends IBuildable<BundleEntrySearch>,
    IBackboneElementBuilder<BundleEntrySearchBuilder>,
    IElementBuilder<BundleEntrySearchBuilder> {
  addParamExtension(param: 'mode' | 'score', extension: IElement): this;

  setMode(mode: BundleEntrySearchModeEnum | BundleEntrySearchModeType): this;

  setScore(score: number): this;
}

export default class BundleEntrySearchBuilder
  extends BackboneElementBuilder<BundleEntrySearchBuilder>
  implements IBundleEntrySearchBuilder
{
  private readonly bundleEntrySearch: IBundleEntrySearch;

  constructor() {
    super();
    this.bundleEntrySearch = {} as IBundleEntrySearch;
  }

  addParamExtension(param: 'mode' | 'score', extension: IElement): this {
    this.bundleEntrySearch[`_${param}`] = extension;
    return this;
  }

  build(): BundleEntrySearch {
    Object.assign(this.bundleEntrySearch, { ...super.entity() });
    return new BundleEntrySearch(this.bundleEntrySearch).toJson();
  }

  setMode(mode: BundleEntrySearchModeEnum | BundleEntrySearchModeType): this {
    this.bundleEntrySearch.mode = mode;
    return this;
  }

  setScore(score: number): this {
    this.bundleEntrySearch.score = score;
    return this;
  }
}
