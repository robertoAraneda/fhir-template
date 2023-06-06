import { IAddress, IPeriod } from '../../interfaces/datatypes';
import { IElement, ISerializable, IBuildable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Address } from '../../datatypes/Address';

type AddressParam = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

export class AddressBuilder extends ElementBuilder<AddressBuilder> implements IBuildable<IAddress>, ISerializable {
  private address: IAddress;

  constructor() {
    super();
    this.address = new Address();
  }

  fromJSON(json: IAddress) {
    this.address = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  addAddressParamExtension<T extends AddressParam>(
    param: T,
    extension: T extends 'line' ? IElement[] : IElement,
  ): AddressBuilder {
    if (param === 'line') {
      this.address._line = extension as IElement[];
    } else {
      const localParam = param as Exclude<AddressParam, 'line'>;
      this.address[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  setUse(value: string): AddressBuilder {
    this.address.use = value;
    return this;
  }

  setType(value: string): AddressBuilder {
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

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  build(): Address {
    return JSON.parse(this.serialize());
  }

  raw(): Address {
    return {
      ...this.address,
      ...super.entity(),
    };
  }
}
