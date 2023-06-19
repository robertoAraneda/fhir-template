import { ICoding, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

/**
 * @description A reference to a code defined by a terminology system.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {string} code - Symbol in syntax defined by the system
 * @property {string} display - Representation defined by the system
 * @property {string} system - Identity of the terminology system
 * @property {string} version - Version of the system - if relevant
 * @property {boolean} userSelected - If this coding was chosen directly by the user
 * @property {IElement} _system - Extension of system
 * @property {IElement} _version - Extension of version
 * @property {IElement} _code - Extension of code
 * @property {IElement} _display - Extension of display
 * @property {IElement} _userSelected - Extension of userSelected
 * @implements {ICoding}
 * @see https://www.hl7.org/fhir/datatypes.html#Coding Coding
 * @author Roberto Araneda
 * @example ```json
 * JSON Template
 * {
 *   // from Element: extension
 *   "system" : "<uri>", // Identity of the terminology system
 *   "version" : "<string>", // Version of the system - if relevant
 *   "code" : "<code>", // I Symbol in syntax defined by the system
 *   "display" : "<string>", // I Representation defined by the system
 *   "userSelected" : <boolean> // If this coding was chosen directly by the user
 * }
 */
export default class Coding extends Element implements ICoding {
  /**
   * @description Identity of the terminology system
   */
  system: string;

  /**
   * @description Version of the system - if relevant
   */
  version: string;

  /**
   * @description Symbol in syntax defined by the system
   */
  code: string;

  /**
   * @description Representation defined by the system
   */
  display: string;

  /**
   * @description If this coding was chosen directly by the user
   */
  userSelected: boolean;

  // Extensions
  /**
   * @description Extension of system
   */
  _system: IElement;

  /**
   * @description Extension of version
   */
  _version: IElement;

  /**
   * @description Extension of code
   */
  _code: IElement;

  /**
   * @description Extension of display
   */
  _display: IElement;

  /**
   * @description Extension of userSelected
   */
  _userSelected: IElement;

  static builder(): ICodingBuilder {
    return new CodingBuilder();
  }

  constructor(args?: ICoding) {
    super();
    Object.assign(this, args);
  }
}

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
class CodingBuilder extends ElementBuilder<CodingBuilder> implements ICodingBuilder {
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
