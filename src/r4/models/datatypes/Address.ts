import { IAddress, IExtension, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { AddressTypeEnum, AddressUseEnum } from '../../enums';
import { AddressTypeType, AddressUseType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

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
  static builder(): IAddressBuilder {
    return new AddressBuilder();
  }

  constructor(args?: IAddress) {
    super();
    Object.assign(this, args);
  }

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
}

type ParamExtensionType = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

export interface IAddressBuilder extends IBuildable<IAddress>, ISerializable, IElementBuilder<IAddressBuilder> {
  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'line' ? IElement[] : IElement,
  ): AddressBuilder;
  setUse(value: AddressUseEnum | AddressUseType): AddressBuilder;
  setType(value: AddressTypeEnum | AddressTypeType): AddressBuilder;
  setText(value: string): AddressBuilder;
  addLine(value: string): AddressBuilder;
  setMultipleLines(value: string[]): AddressBuilder;
  setCity(value: string): AddressBuilder;
  setDistrict(value: string): AddressBuilder;
  setState(value: string): AddressBuilder;
  setPostalCode(value: string): AddressBuilder;
  setCountry(value: string): AddressBuilder;
  setPeriod(value: IPeriod): AddressBuilder;
}

class AddressBuilder extends ElementBuilder<AddressBuilder> implements IAddressBuilder {
  private readonly address: IAddress;

  constructor() {
    super();
    this.address = {} as IAddress;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'line' ? IElement[] : IElement,
  ): AddressBuilder {
    if (param === 'line') {
      this.address._line = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'line'>;
      this.address[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  setUse(value: AddressUseEnum | AddressUseType): AddressBuilder {
    this.address.use = value;
    return this;
  }

  setType(value: AddressTypeEnum | AddressTypeType): AddressBuilder {
    this.address.type = value;
    return this;
  }

  setText(value: string): AddressBuilder {
    this.address.text = value;
    return this;
  }

  addLine(value: string): AddressBuilder {
    if (!this.address.line) this.address.line = new Array<string>();
    this.address.line.push(value);
    return this;
  }

  setMultipleLines(value: string[]): AddressBuilder {
    this.address.line = value;
    return this;
  }

  setCity(value: string): AddressBuilder {
    this.address.city = value;
    return this;
  }

  setDistrict(value: string): AddressBuilder {
    this.address.district = value;
    return this;
  }

  setState(value: string): AddressBuilder {
    this.address.state = value;
    return this;
  }

  setPostalCode(value: string): AddressBuilder {
    this.address.postalCode = value;
    return this;
  }

  setCountry(value: string): AddressBuilder {
    this.address.country = value;
    return this;
  }

  setPeriod(value: IPeriod): AddressBuilder {
    this.address.period = value;
    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
  }

  build(): IAddress {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IAddress {
    return {
      ...this.address,
      ...super.entity(),
    };
  }
}
