import { IBackboneElement, IElement } from '../base';
import BundleEntrySearchModeEnum from '../../enums/BundleEntrySearchModeEnum';
import BundleEntrySearchModeType from '../../types/BundleEntrySearchModeType';

export default interface IBundleEntrySearch extends IBackboneElement {
  mode?: BundleEntrySearchModeEnum | BundleEntrySearchModeType;
  score?: number;

  _mode?: IElement;
  _score?: IElement;
}
