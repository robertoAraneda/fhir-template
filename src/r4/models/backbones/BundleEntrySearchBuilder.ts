import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBundleEntrySearch } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElementBuilder } from '../base/ElementBuilder';

export interface IBundleEntrySearchBuilder
  extends IBuildable<IBundleEntrySearch>,
    ISerializable,
    IBackboneElementBuilder<IBundleEntrySearchBuilder>,
    IElementBuilder<IBundleEntrySearchBuilder> {
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

  build(): IBundleEntrySearch {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IBundleEntrySearch {
    return {
      ...this.bundleEntrySearch,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
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
