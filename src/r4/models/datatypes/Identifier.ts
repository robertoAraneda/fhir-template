import { ICodeableConcept, IExtension, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IdentifierUseEnum } from '../../enums';
import { IdentifierUseType } from '../../types';

/**
 * @description An identifier intended for computation
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {IdentifierUseEnum | IdentifierUseType} use - 	usual | official | temp | secondary | old (If known). Binding: IdentifierUse (Required)
 * @property {ICodeableConcept} type - Description of identifier
 * @property {string} system - The namespace for the identifier value
 * @property {string} value - The value that is unique
 * @property {IPeriod} period - Time period when id is/was valid for use
 * @property {IReference} assigner - Organization that issued id (maybe just text)
 * @property {IElement} _use - Extension of use
 * @property {IElement} _system - Extension of system
 * @property {IElement} _value - Extension of value
 * @see {@link https://www.hl7.org/fhir/datatypes.html#Identifier Identifier}
 * @author Roberto Araneda
 * @example JSON Template for Identifier
 * {
 *   // from Element: extension
 *   "use" : "<code>", // usual | official | temp | secondary | old (If known)
 *   "type" : { CodeableConcept }, // Description of identifier
 *   "system" : "<uri>", // The namespace for the identifier value
 *   "value" : "<string>", // I The value that is unique
 *   "period" : { Period }, // Time period when id is/was valid for use
 *   "assigner" : { Reference(Organization) } // Organization that issued id (may be just text)
 * }
 */
export default class Identifier implements IIdentifier {
  /**
   * @description Unique id for inter-element referencing
   */
  id?: string;

  /**
   * @description Additional content defined by implementations
   */
  extension?: IExtension[];

  /**
   * @description usual | official | temp | secondary | old (If known)
   */
  use?: IdentifierUseEnum | IdentifierUseType;

  /**
   * @description Description of identifier
   */
  type?: ICodeableConcept;

  /**
   * @description The namespace for the identifier value
   */
  system?: string;

  /**
   * @description The value that is unique
   */
  value?: string;

  /**
   * @description Time period when id is/was valid for use
   */
  period?: IPeriod;

  /**
   * @description Organization that issued id (may-be just text)
   */
  assigner?: IReference;

  /**
   * @description Extension of use
   */
  _use?: IElement;

  /**
   * @description Extension of system
   */
  _system?: IElement;

  /**
   * @description Extension of value
   */
  _value?: IElement;

  constructor(args?: IIdentifier) {
    Object.assign(this, args);
  }
}
