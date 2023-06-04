import { Element } from '../base/Element';

export interface Period extends Element {
  start?: string;
  end?: string;
  _start?: Element;
  _end?: Element;
}
