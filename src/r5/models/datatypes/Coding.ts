import { ICoding, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

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
export default class Coding implements ICoding {
  /**
   * @description Unique id for inter-element referencing
   */
  id: string;

  /**
   * @description Additional content defined by implementations
   */
  extension: IExtension[];

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

  constructor(args?: ICoding) {
    Object.assign(this, args);
  }
}
