import { IAddress, IExtension, IPeriod } from '../interfaces/datatypes';
import { IElement } from '../interfaces/base';
import { AddressTypeEnum, AddressUseEnum } from '../enums';
import { AddressTypeType, AddressUseType } from '../types';

export class Address implements IAddress {
  id: string;
  use: AddressUseEnum | AddressUseType;
  type: AddressTypeEnum | AddressTypeType;
  text: string;
  line: string[];
  city?: string;
  district: string;
  state: string;
  postalCode: string;
  country: string;
  period: IPeriod;
  extension: IExtension[];
  _use: IElement;
  _type?: IElement;
  _text?: IElement;
  _line?: IElement[];
  _city?: IElement;
  _district?: IElement;
  _state?: IElement;
  _postalCode?: IElement;
  _country?: IElement;

  constructor(args?: Partial<Address>) {
    Object.assign(this, args);
  }
}
