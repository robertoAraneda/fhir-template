import { ICoding } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Coding } from '../../models/datatypes';
import { createBuildAndSerializeMethods } from '../../helpers/buildAndSerialize';

type ParamType = 'system' | 'version' | 'code' | 'display' | 'userSelected';
type BuilderMethod = 'setSystem' | 'setVersion' | 'setCode' | 'setDisplay' | 'setUserSelected' | 'build' | 'serialize';
interface ICodingBuilder {
  build: () => ICoding;
  serialize: () => string;
  setSystem: (value: string) => Getters<ICodingBuilder>;
}

type Getters<Type> = {
  [Property in keyof Type]: () => Type[Property];
};
/**
 * @description Coding builder
 *
 */
export default class CodingBuilder extends ElementBuilder<CodingBuilder> implements IBuildable<ICoding>, ISerializable {
  private coding: ICoding;

  constructor() {
    super();

    this.coding = new Coding();
  }

  /**
   * @description Create a new Coding from a JSON representation
   * @param json
   * @returns build and serialize functions
   */
  fromJSON(json: ICoding): Pick<ICodingBuilder, 'build' | 'serialize'> {
    this.coding = json;

    return createBuildAndSerializeMethods(this.raw());
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
  addCodingParamExtension(param: ParamType, extension: IElement): CodingBuilder {
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
  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  /**
   * @description Return the coding as a ICoding object
   * @returns {ICoding} The coding
   */
  build(): ICoding {
    return JSON.parse(this.serialize());
  }

  /**
   * @description Return the coding as a native ICoding object
   * @returns {ICoding} The coding
   */
  raw(): ICoding {
    return {
      ...this.coding,
      ...super.entity(),
    };
  }
}
