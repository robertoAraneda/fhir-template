import { IBackboneElement, IElement } from '../base';
import { IPeriod, IReference } from '../datatypes';

export default interface IGroupMember extends IBackboneElement {
  entity: IReference;
  period?: IPeriod;
  inactive?: boolean;
  _inactive?: IElement;
}
