import Element from '../base/Element';
import AddressBuilder from './AddressBuilder';
import { AddressTypeEnum, AddressUseEnum } from '../../../r4/enums';
import { AddressTypeType, AddressUseType } from '../../../r4/types';
import { IAddress, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { AddressValidator } from './AddressValidator';

/**
 * @description An address expressed using postal conventions (as opposed to GPS or other location definition formats)
 * @property {string} id
 * @property {IExtension[]} extension
 * @property {AddressUseEnum | AddressUseType} use
 * @property {AddressTypeEnum | AddressTypeType} type
 * @property {string} text
 * @property {string[]} line
 * @property {string} city
 * @property {string} district
 * @property {string} state
 * @property {string} postalCode
 * @property {string} country
 * @property {IPeriod} period
 * @property {IElement} _use
 * @property {IElement} _type
 * @property {IElement} _text
 * @property {IElement[]} _line
 * @property {IElement} _city
 * @property {IElement} _district
 * @property {IElement} _state
 * @property {IElement} _postalCode
 * @property {IElement} _country
 * @see https://hl7.org/fhir/datatypes.html#Address Address
 * @author Roberto Araneda
 */
export default class Address extends Element implements IAddress {
  /**
   * @description home | work | temp | old | billing - purpose of this address
   */
  use?: AddressUseEnum | AddressUseType;

  /**
   * @description postal | physical | both
   */
  type?: AddressTypeEnum | AddressTypeType;

  /**
   * @description Text representation of the address
   */
  text?: string;

  /**
   * @description Street name, number, direction & P.O. Box etc.
   */
  line?: string[];

  /**
   * @description Name of city, town etc.
   */
  city?: string;

  /**
   * @description District name (aka county)
   */
  district?: string;

  /**
   * @description Sub-unit of country (abbreviations ok)
   */
  state?: string;

  /**
   * @description Postal code for area
   */
  postalCode?: string;

  /**
   * @description Country (e.g. can be ISO 3166 2 or 3-letter code)
   */
  country?: string;

  /**
   * @description Time period when address was/is in use
   */
  period?: IPeriod;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   *
   */
  _text?: IElement;

  /**
   * Extensions for line
   */
  _line?: IElement[];

  /**
   * Extensions for city
   */
  _city?: IElement;

  /**
   * Extensions for district
   */
  _district?: IElement;

  /**
   * Extensions for state
   */
  _state?: IElement;

  /**
   * Extensions for postalCode
   */
  _postalCode?: IElement;

  /**
   * Extensions for country
   */
  _country?: IElement;

  static builder(): AddressBuilder {
    return new AddressBuilder();
  }

  toJson(): Address {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Address${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Address${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IAddress) {
    super();
    AddressValidator(args);
    Object.assign(this, args);
  }
}
