import { Element } from '../base/Element';

export interface Coding extends Element {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
  _system?: Element;
  _version?: Element;
  _code?: Element;
  _display?: Element;
  _userSelected?: Element;
}
