import { IBuildable } from '../../../globals/interfaces';
import { IAddress, IPeriod } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { AddressTypeEnum, AddressUseEnum } from '../../../enums';
import { AddressTypeType, AddressUseType } from '../../../types';
import Address from './Address';

type ParamExtensionType = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

export interface IAddressBuilder extends IBuildable<Address>, IElementBuilder<AddressBuilder> {
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

export class AddressBuilder extends ElementBuilder<AddressBuilder> implements IAddressBuilder {
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

  build(): Address {
    Object.assign(this.address, { ...super.entity() });
    return new Address(this.address).toJson();
  }
}
