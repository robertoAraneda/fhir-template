import { IElement } from '../base';

export interface IPeriod extends IElement {
  start?: string;
  end?: string;
  _start?: IElement;
  _end?: IElement;
}
