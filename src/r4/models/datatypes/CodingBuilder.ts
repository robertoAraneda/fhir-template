import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { ICoding } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';

type ParamType = 'system' | 'version' | 'code' | 'display' | 'userSelected';

export interface ICodingBuilder extends IBuildable<ICoding>, ISerializable, IElementBuilder<ICodingBuilder> {
  setSystem: (value: string) => CodingBuilder;
  setVersion: (value: string) => CodingBuilder;
  setCode: (value: string) => CodingBuilder;
  setDisplay: (value: string) => CodingBuilder;
  setUserSelected: (value: boolean) => CodingBuilder;
  addParamExtension: (param: ParamType, extension: IElement) => CodingBuilder;
}

/**
 * @description Coding builder
 *
 */
export class CodingBuilder extends ElementBuilder<CodingBuilder> implements ICodingBuilder {
  private readonly coding: ICoding;

  constructor() {
    super();

    this.coding = {} as ICoding;
  }

  /**
   * @description Add a param extension to the coding
   * @param param
   * @param extension
   * @returns CodingBuilder The builder
   * @example ```typescript
   * const coding = new CodingBuilder()
   * .addCodingParamExtension('system', {
   *    "extension": [
   *      {
   *        url: "http://example.com",
   *        valueString: "example"
   *      }
   *    ]
   *  })
   *  .build();
   *
   *  JSON generated:
   *    {
   *      "_system": {
   *        "extension": [
   *          {
   *            url: "http://example.com",
   *            valueString: "example"
   *          }
   *        ]
   *      }
   *    }
   */
  addParamExtension(param: ParamType, extension: IElement): CodingBuilder {
    this.coding[`_${param}`] = extension;
    return this;
  }

  /**
   * @description Set the system of the coding
   * @param system
   * @returns {CodingBuilder} The builder
   */
  setSystem(system: string): CodingBuilder {
    this.coding.system = system;
    return this;
  }

  /**
   * @description Set the version of the coding
   * @param version
   * @returns {CodingBuilder} The builder
   */
  setVersion(version: string): CodingBuilder {
    this.coding.version = version;
    return this;
  }

  /**
   * @description Set the code of the coding
   * @param code
   * @returns {CodingBuilder} The builder
   */
  setCode(code: string): CodingBuilder {
    this.coding.code = code;
    return this;
  }

  /**
   * @description Set the display of the coding
   * @param display
   * @returns {CodingBuilder} The builder
   */
  setDisplay(display: string): CodingBuilder {
    this.coding.display = display;
    return this;
  }

  /**
   * @description Set the userSelected of the coding
   * @param userSelected
   * @returns {CodingBuilder} The builder
   */
  setUserSelected(userSelected: boolean): CodingBuilder {
    this.coding.userSelected = userSelected;
    return this;
  }

  /**
   * @description Return the coding as a JSON string
   * @returns {ICoding} The coding
   */
  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  /**
   * @description Return the coding as a ICoding object
   * @returns {ICoding} The coding
   */
  build(): ICoding {
    return JSON.parse(this.buildAsString());
  }

  /**
   * @description Return the coding as a native ICoding object
   * @returns {ICoding} The coding
   */
  compileAsDefault(): ICoding {
    return {
      ...this.coding,
      ...super.entity(),
    };
  }
}
