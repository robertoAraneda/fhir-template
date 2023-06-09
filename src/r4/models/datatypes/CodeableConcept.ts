import { ICodeableConcept, ICoding, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

/**
 * @description Concept - reference to a terminology or just text.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @property {IElement} _text - Extension of text element
 * @see https://www.hl7.org/fhir/datatypes.html#CodeableConcept CodeableConcept
 * @author Roberto Araneda
 * @example ```json
 * JSON Template
 * {
 *   // from Element: extension
 *   "coding" : [{ Coding }], // Code defined by a terminology system
 *   "text" : "<string>" // Plain text representation of the concept
 * }
 */
export class CodeableConcept implements ICodeableConcept {
  /**
   * @description Unique id for inter-element referencing
   */
  id?: string;

  /**
   * @description Additional content defined by implementations
   */
  extension?: IExtension[];

  /**
   * @description Code defined by a terminology system
   */
  coding?: ICoding[];

  /**
   * @description Plain text representation of the concept
   */
  text?: string;

  /**
   * @description Extension of text element
   */
  _text?: IElement;

  constructor(args?: ICodeableConcept) {
    Object.assign(this, args);
  }
}
