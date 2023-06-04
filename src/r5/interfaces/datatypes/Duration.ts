import { Element } from '../base/Element';

export interface Duration extends Element {
  value?: number;
  unit?: string;
  system?: string;
  code?: string;
  _value?: Element;
  _unit?: Element;
  _system?: Element;
  _code?: Element;
}
