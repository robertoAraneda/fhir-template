import { Address } from '../../interfaces/datatypes/Address';
import { Element } from '../../interfaces/base/Element';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';
import { Period } from '../../interfaces/datatypes/Period';

type AddressParam = 'use' | 'type' | 'text' | 'line' | 'city' | 'district' | 'state' | 'postalCode' | 'country';

export class AddressBuilder extends ElementBuilder<AddressBuilder> implements Build<Address>, Serialize {
  private readonly address: Address;

  constructor() {
    super();

    this.address = {} as Address;
  }

  addParamExtension<T extends AddressParam>(
    param: T,
    extension: T extends 'line' ? Element[] : Element,
  ): AddressBuilder {
    if (param === 'line') {
      this.address._line = extension as Element[];
    } else {
      const localParam = param as Exclude<AddressParam, 'line'>;
      this.address[`_${localParam}`] = extension as Element;
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

  setPeriod(value: Period): AddressBuilder {
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
