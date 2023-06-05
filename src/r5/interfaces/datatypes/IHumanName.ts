import { NameUseEnum } from '../../enums/NameUseEnum';
import { NameUseType } from '../../types/NameUseType';
import { IPeriod } from './IPeriod';
import { IElement } from '../base/IElement';

export interface IHumanName extends IElement {
  use?: NameUseEnum | NameUseType;
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: IPeriod;
  _use?: IElement;
  _text?: IElement;
  _family?: IElement;
  _given?: IElement[];
  _prefix?: IElement[];
  _suffix?: IElement[];
}
