import { IBackboneElement, IElement } from '../base';

export default interface IBundleLink extends IBackboneElement {
  relation: string;
  url: string;

  _relation?: IElement;
  _url?: IElement;
}
