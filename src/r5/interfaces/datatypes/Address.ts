import { Element } from '../base/Element';
import { AddressUse } from '../../enums/AddressUse';
import { AddressUseType } from '../../types/AddressUseType';
import { AddressType } from '../../enums/AddressType';
import { AddressTypeType } from '../../types/AddressTypeType';
import { Period } from '../../datatypes/Period';

export interface Address extends Element {
  use?: AddressUse | AddressUseType;
  _use?: Element;
  type?: AddressType | AddressTypeType;
  _type?: Element;
  text?: string;
  _text?: Element;
  line?: string[];
  _line?: Element[];
  city?: string;
  _city?: Element;
  district?: string;
  _district?: Element;
  state?: string;
  _state?: Element;
  postalCode?: string;
  _postalCode?: Element;
  country?: string;
  _country?: Element;
  period?: Period;
}
