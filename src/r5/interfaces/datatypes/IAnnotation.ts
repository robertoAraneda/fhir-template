import { IElement } from '../base';
import IReference from './IReference';

export default interface IAnnotation extends IElement {
  authorReference?: IReference;
  authorString?: string;
  time?: string;
  text: string;
  _authorString?: IElement;
  _time?: IElement;
  _text?: IElement;
}
