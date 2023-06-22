import { IBackboneElement, IElement } from '../base';

export default interface IBundleEntrySearch extends IBackboneElement {
  mode?: string;
  score?: number;

  _mode?: IElement;
  _score?: IElement;
}
