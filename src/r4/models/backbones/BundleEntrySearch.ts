import { IBundleEntrySearch } from '../../interfaces/backbones';
import { IExtension } from '../../interfaces/datatypes';
import BackboneElement from './BackboneElement';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../../builders/base/BackboneElementBuilder';
import { IElementBuilder } from '../../builders/base/ElementBuilder';

export default class BundleEntrySearch extends BackboneElement implements IBundleEntrySearch {
  // BundleEntrySearchBuilder attributes
  mode: string;
  score: number;

  // Extensions of bundle entry search attributes
  _mode?: IExtension;
  _score?: IExtension;

  static builder(): IBundleEntrySearchBuilder {
    return new BundleEntrySearchBuilder();
  }

  constructor(args?: IBundleEntrySearch) {
    super();
    Object.assign(this, args);
  }
}

export interface IBundleEntrySearchBuilder
  extends IBuildable<IBundleEntrySearch>,
    ISerializable,
    IBackboneElementBuilder<IBundleEntrySearchBuilder>,
    IElementBuilder<IBundleEntrySearchBuilder> {
  addParamExtension(param: 'mode' | 'score', extension: IElement): BundleEntrySearchBuilder;
  setMode(mode: string): BundleEntrySearchBuilder;
  setScore(score: number): BundleEntrySearchBuilder;
}

class BundleEntrySearchBuilder
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
