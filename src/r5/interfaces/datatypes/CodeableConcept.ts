import { Element } from '../base/Element';
import { Coding } from './Coding';

export interface CodeableConcept extends Element {
  coding?: Coding[];
  text?: string;
  _text?: Element;
}
