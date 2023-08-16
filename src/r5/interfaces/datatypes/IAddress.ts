import { IElement } from '../base';
import { AddressUseType, AddressTypeType } from '../../../types';
import { AddressTypeEnum, AddressUseEnum } from '../../../enums';
import IPeriod from './IPeriod';

/**
 * @description FHIR R4
 */
export default interface IAddress extends IElement {
  // Address attributes
  use?: AddressUseEnum | AddressUseType;
  type?: AddressTypeEnum | AddressTypeType;
  text?: string;
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: IPeriod;

  // Extensions
  _use?: IElement;
  _type?: IElement;
  _text?: IElement;
  _line?: IElement[];
  _city?: IElement;
  _district?: IElement;
  _state?: IElement;
  _postalCode?: IElement;
  _country?: IElement;
}
