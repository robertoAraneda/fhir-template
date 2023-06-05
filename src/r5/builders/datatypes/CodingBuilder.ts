import { ICoding, ICodeableConcept } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';

type ParamType = 'system' | 'version' | 'code' | 'display' | 'userSelected';

export class CodingBuilder
  extends ElementBuilder<CodingBuilder>
  implements IBuildable<ICodeableConcept>, ISerializable
{
  private readonly coding: ICoding;

  constructor() {
    super();

    this.coding = {} as ICoding;
  }

  addCodingParamExtension(param: ParamType, extension: IElement): CodingBuilder {
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

  build(): ICoding {
    return JSON.parse(this.serialize());
  }

  raw(): ICoding {
    return {
      ...this.coding,
      ...super.entity(),
    };
  }
}
