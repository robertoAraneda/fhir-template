import { IAddress, IPeriod } from '../../interfaces/datatypes';
import { IElement, ISerializable, IBuildable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Address } from '../../models/datatypes';

type ParamType = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

interface IAddressBuilder extends IBuildable<IAddress>, ISerializable {
  addParamExtension<T extends ParamType>(param: T, extension: T extends 'line' ? IElement[] : IElement): this;
  setUse(value: string): this;
  setType(value: string): this;
  setText(value: string): this;
  addLine(value: string): this;
  setMultipleLines(value: string[]): this;
  setCity(value: string): this;
  setDistrict(value: string): this;
  setState(value: string): this;
  setPostalCode(value: string): this;
  setCountry(value: string): this;
  setPeriod(value: IPeriod): this;
}

export default class AddressBuilder extends ElementBuilder<AddressBuilder> implements IAddressBuilder {
  private readonly address: IAddress;

  constructor() {
    super();
    this.address = new Address();
  }

  addParamExtension<T extends ParamType>(param: T, extension: T extends 'line' ? IElement[] : IElement): this {
    if (param === 'line') {
      this.address._line = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamType, 'line'>;
      this.address[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  setUse(value: string): this {
    this.address.use = value;
    return this;
  }

  setType(value: string): this {
    this.address.type = value;
    return this;
  }

  setText(value: string): this {
    this.address.text = value;
    return this;
  }

  addLine(value: string): this {
    this.address.line = this.address.line || [];
    this.address.line.push(value);
    return this;
  }

  setMultipleLines(value: string[]): this {
    this.address.line = value;
    return this;
  }

  setCity(value: string): this {
    this.address.city = value;
    return this;
  }

  setDistrict(value: string): this {
    this.address.district = value;
    return this;
  }

  setState(value: string): this {
    this.address.state = value;
    return this;
  }

  setPostalCode(value: string): this {
    this.address.postalCode = value;
    return this;
  }

  setCountry(value: string): this {
    this.address.country = value;
    return this;
  }

  setPeriod(value: IPeriod): this {
    this.address.period = value;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }
  build(): IAddress {
    return JSON.parse(this.serialize());
  }

  raw(): IAddress {
    return {
      ...this.address,
      ...super.entity(),
    };
  }
}
