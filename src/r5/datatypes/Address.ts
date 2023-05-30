import { Element } from './Element';
import { Period } from './Period';
import { AddressUse } from '../enums/AddressUse';
import { AddressUseType } from '../types/AddressUseType';
import { AddressType } from '../enums/AddressType';
import { AddressTypeType } from '../types/AddressTypeType';

export class Address extends Element {
  use?: AddressUse | AddressUseType;
  type?: AddressType | AddressTypeType;
  text?: string;
  line?: string[];
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: Period;

  constructor(args?: Partial<Address>) {
    super();
    Object.assign(this, args);
  }
}
