import { IExtension, IHumanName, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { NameUseEnum } from '../../enums';
import { NameUseType } from '../../types';
import Element from '../base/Element';
import { HumanNameBuilder } from './HumanNameBuilder';

/**
 * @description Name of a human or other living entity - parts and usage
 * @implements {IHumanName}
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {NameUseEnum} use - usual | official | temp | nickname | anonymous | old | maiden
 * @property {string} text - Text representation of the full name
 * @property {string} family - Family name (often called 'Surname')
 * @property {string[]} given - Given names (not always 'first'). Includes middle names
 * @property {string[]} prefix - Parts that come before the name
 * @property {string[]} suffix - Parts that come after the name
 * @property {IPeriod} period - Time period when name was/is in use
 * @property {IElement} _use - Extension of use
 * @property {IElement} _text - Extension of text
 * @property {IElement} _family - Extension of family
 * @property {IElement[]} _given - Extension of given
 * @property {IElement[]} _prefix - Extension of prefix
 * @property {IElement[]} _suffix - Extension of suffix
 * @see {@link https://www.hl7.org/fhir/datatypes.html#HumanName HumanName}
 * @author Roberto Araneda
 * @example JSON Template for HumanName
 * {
 *   // from Element: extension
 *   "use" : "<code>", // usual | official | temp | nickname | anonymous | old | maiden
 *   "text" : "<string>", // Text representation of the full name
 *   "family" : "<string>", // Family name (often called 'Surname')
 *   "given" : ["<string>"], // Given names (not always 'first'). Includes middle names
 *   "prefix" : ["<string>"], // Parts that come before the name
 *   "suffix" : ["<string>"], // Parts that come after the name
 *   "period" : { Period } // Time period when name was/is in use
 * }
 */
export default class HumanName extends Element implements IHumanName {
  /**
   * @description usual | official | temp | nickname | anonymous | old | maiden
   */
  use?: NameUseEnum | NameUseType;

  /**
   * @description Text representation of the full name
   */
  text?: string;

  /**
   * @description Family name (often called 'Surname')
   */
  family?: string;

  /**
   * @description Given names (not always 'first'). Includes middle names
   */
  given?: string[];

  /**
   * @description Parts that come before the name
   */
  prefix?: string[];

  /**
   * @description Parts that come after the name
   */
  suffix?: string[];

  /**
   * @description Time period when name was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of use
   */
  _use?: IElement;

  /**
   * @description Extension of text
   */
  _text?: IElement;

  /**
   * @description Extension of family
   */
  _family?: IElement;

  /**
   * @description Extension of given
   */
  _given?: IElement[];

  /**
   * @description Extension of prefix
   */
  _prefix?: IElement[];

  /**
   * @description Extension of suffix
   */
  _suffix?: IElement[];

  toJson(): HumanName {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `HumanName${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `HumanName${JSON.stringify(this.toJson())}`;
  }

  static builder(): HumanNameBuilder {
    return new HumanNameBuilder();
  }

  constructor(args?: IHumanName) {
    super();
    Object.assign(this, args);
  }
}
