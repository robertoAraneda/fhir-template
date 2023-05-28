import { Period } from '../datatypes/Period';
import { Address } from '../datatypes/Address';

export class AddressBuilder {
  private _use: string;
  private _type: string;
  private _text: string;
  private _line: string[];
  private _city: string;
  private _district: string;
  private _state: string;
  private _postalCode: string;
  private _country: string;
  private _period: Period;

  setUse(value: string): AddressBuilder {
    this._use = value;
    return this;
  }

  setType(value: string): AddressBuilder {
    this._type = value;
    return this;
  }

  setText(value: string): AddressBuilder {
    this._text = value;
    return this;
  }

  setLine(value: string[]): AddressBuilder {
    this._line = value;
    return this;
  }

  addLine(value: string): AddressBuilder {
    if (!this._line) this._line = new Array<string>();
    this._line.push(value);
    return this;
  }

  getLine(index: number) {
    return {
      get: () => this._line[index],
      setLine: (value: string) => this.setLineAtIndex(index, value),
    };
  }

  setLineAtIndex(index: number, value: string): AddressBuilder {
    if (!this._line) this._line = new Array<string>();
    this._line[index] = value;
    return this;
  }

  setMultipleLines(value: string[]): AddressBuilder {
    this._line = value;
    return this;
  }

  setCity(value: string): AddressBuilder {
    this._city = value;
    return this;
  }

  setDistrict(value: string): AddressBuilder {
    this._district = value;
    return this;
  }

  setState(value: string): AddressBuilder {
    this._state = value;
    return this;
  }

  setPostalCode(value: string): AddressBuilder {
    this._postalCode = value;
    return this;
  }

  setCountry(value: string): AddressBuilder {
    this._country = value;
    return this;
  }

  setPeriod(value: Period): AddressBuilder {
    this._period = value;
    return this;
  }

  build() {
    return new Address({
      use: this._use,
      type: this._type,
      text: this._text,
      line: this._line,
      city: this._city,
      district: this._district,
      state: this._state,
      postalCode: this._postalCode,
      country: this._country,
      period: this._period,
    });
  }
}
