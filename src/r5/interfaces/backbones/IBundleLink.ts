import { IBackboneElement, IElement } from '../base';
import BundleLinkRelationEnum from '../../enums/BundleLinkRelationEnum';
import BundleLinkRelationType from '../../types/BundleLinkRelationType';

export default interface IBundleLink extends IBackboneElement {
  relation: BundleLinkRelationEnum | BundleLinkRelationType;
  url: string;

  _relation?: IElement;
  _url?: IElement;
}
