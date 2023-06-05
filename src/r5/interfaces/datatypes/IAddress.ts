import { IElement } from '../base';
import { AddressUseType, AddressTypeType } from '../../types';
import { AddressTypeEnum, AddressUseEnum } from '../../enums';
import { IPeriod } from './index';

export interface IAddress extends IElement {
  use?: AddressUseEnum | AddressUseType;
  _use?: IElement;
  type?: AddressTypeEnum | AddressTypeType;
  _type?: IElement;
  text?: string;
  _text?: IElement;
  line?: string[];
  _line?: IElement[];
  city?: string;
  _city?: IElement;
  district?: string;
  _district?: IElement;
  state?: string;
  _state?: IElement;
  postalCode?: string;
  _postalCode?: IElement;
  country?: string;
  _country?: IElement;
  period?: IPeriod;
}
