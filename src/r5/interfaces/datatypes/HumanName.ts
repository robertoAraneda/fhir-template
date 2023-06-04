import { NameUse } from '../../enums/NameUse';
import { NameUseType } from '../../types/NameUseType';
import { Period } from './Period';
import { Element } from '../base/Element';

export interface HumanName extends Element {
  use?: NameUse | NameUseType;
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: Period;
  _use?: Element;
  _text?: Element;
  _family?: Element;
  _given?: Element[];
  _prefix?: Element[];
  _suffix?: Element[];
}
