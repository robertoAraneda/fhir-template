import { IElement } from '../base';
import ISimpleQuantity from './ISimpleQuantity';

export default interface IRange extends IElement {
  low?: ISimpleQuantity;
  high?: ISimpleQuantity;
}
