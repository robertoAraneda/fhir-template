import { Extension } from '../../interfaces/datatypes/Extension';
import { Coding } from '../../interfaces/datatypes/Coding';
import { Element } from '../../interfaces/base/Element';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Serialize } from '../../interfaces/base/Serialize';

type ParamType = 'system' | 'version' | 'code' | 'display' | 'userSelected';

export class CodingBuilder extends ElementBuilder<CodingBuilder> implements Build<CodeableConcept>, Serialize {
  private readonly coding: Coding;

  constructor() {
    super();

    this.coding = {} as Coding;
  }

  addCodingParamExtension(param: ParamType, extension: Extension): CodingBuilder {
    this.coding[`_${param}`] = extension;
    return this;
  }

  setSystem(system: string): CodingBuilder {
    this.coding.system = system;
    return this;
  }

  setVersion(version: string): CodingBuilder {
    this.coding.version = version;
    return this;
  }

  setCode(code: string): CodingBuilder {
    this.coding.code = code;
    return this;
  }

  setDisplay(display: string): CodingBuilder {
    this.coding.display = display;
    return this;
  }

  setUserSelected(userSelected: boolean): CodingBuilder {
    this.coding.userSelected = userSelected;
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Coding {
    return JSON.parse(this.serialize());
  }

  raw(): Element {
    return {
      ...this.coding,
      ...super.entity(),
    };
  }
}
