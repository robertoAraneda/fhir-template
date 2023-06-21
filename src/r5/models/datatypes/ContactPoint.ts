import { IContactPoint, IExtension, IPeriod } from '../../interfaces/datatypes';
import { ContactPointSystemEnum, ContactPointUseEnum } from '../../enums';
import { ContactPointSystemType, ContactPointUseType } from '../../types';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import ContactPointBuilder from './ContactPointBuilder';

/**
 * @description Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {IPeriod} period - Time period when the contact point was/is in use
 * @property {number} rank - Specify preferred order of use (1 = highest)
 * @property {ContactPointSystemEnum} system - phone | fax | email | pager | url | sms | other
 * @property {string} value - The actual contact point details
 * @property {ContactPointUseEnum} use - home | work | temp | old | mobile - purpose of this contact point
 * @property {IElement} _system - Extension of system element
 * @property {IElement} _value - Extension of value element
 * @property {IElement} _use - Extension of use element
 * @property {IElement} _rank - Extension of rank element
 * @see https://www.hl7.org/fhir/datatypes.html#ContactPoint ContactPoint
 * @author Roberto Araneda
 *
 * @example ```json
 * JSON Template
 * {
 *   // from Element: extension
 *   "system" : "<code>", // phone | fax | email | pager | url | sms | other
 *   "value" : "<string>", // The actual contact point details
 *   "use" : "<code>", // home | work | temp | old | mobile - purpose of this contact point
 *   "rank" : "<positiveInt>", // Specify preferred order of use (1 = highest)
 *   "period" : { Period } // Time period when the contact point was/is in use
 * }
 */
export default class ContactPoint extends Element implements IContactPoint {
  /**
   * @description phone | fax | email | pager | url | sms | other
   */
  system?: ContactPointSystemEnum | ContactPointSystemType;

  /**
   * @description The actual contact point details
   */
  value?: string;

  /**
   * @description home | work | temp | old | mobile - purpose of this contact point
   */
  use?: ContactPointUseEnum | ContactPointUseType;

  /**
   * @description Specify preferred order of use (1 = highest)
   */
  rank?: number;

  /**
   * @description Time period when the contact point was/is in use
   */
  period?: IPeriod;

  // Extensions

  /**
   * @description Extension of system element
   */
  _system?: IElement;

  /**
   * @description Extension of value element
   */
  _value?: IElement;

  /**
   * @description Extension of use element
   */
  _use?: IElement;

  /**
   * @description Extension of rank element
   */
  _rank?: IElement;

  static builder(): ContactPointBuilder {
    return new ContactPointBuilder();
  }

  toJson(): ContactPoint {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `CodingBuilder${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `CodingBuilder${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IContactPoint) {
    super();
    Object.assign(this, args);
  }
}
