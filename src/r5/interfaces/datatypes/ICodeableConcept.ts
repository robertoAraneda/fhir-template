import { IElement } from '../base';
import { ICoding } from './ICoding';

export interface ICodeableConcept extends IElement {
  coding?: ICoding[];
  text?: string;
  _text?: IElement;
}
