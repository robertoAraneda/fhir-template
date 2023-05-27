import { Coding } from '../datatypes/Coding';

export class CodingBuilder {
  private _system: string;
  private _version: string;
  private _code: string;
  private _display: string;
  private _userSelected: boolean;

  setSystem(system: string): CodingBuilder {
    this._system = system;
    return this;
  }

  setVersion(version: string): CodingBuilder {
    this._version = version;
    return this;
  }

  setCode(code: string): CodingBuilder {
    this._code = code;
    return this;
  }

  setDisplay(display: string): CodingBuilder {
    this._display = display;
    return this;
  }

  setUserSelected(userSelected: boolean): CodingBuilder {
    this._userSelected = userSelected;
    return this;
  }

  getSystem(): string {
    return this._system;
  }

  getVersion(): string {
    return this._version;
  }

  getCode(): string {
    return this._code;
  }

  getDisplay(): string {
    return this._display;
  }

  getUserSelected(): boolean {
    return this._userSelected;
  }

  build(): Coding {
    return new Coding({
      system: this._system,
      version: this._version,
      code: this._code,
      display: this._display,
      userSelected: this._userSelected,
    });
  }
}
