import { IElement } from '../base/IElement';

export interface IDuration extends IElement {
  value?: number;
  unit?: string;
  system?: string;
  code?: string;
  _value?: IElement;
  _unit?: IElement;
  _system?: IElement;
  _code?: IElement;
}
