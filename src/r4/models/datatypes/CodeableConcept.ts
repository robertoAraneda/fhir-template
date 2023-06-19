import { ICodeableConcept, ICoding, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { CodeableConceptBuilder, ICodeableConceptBuilder } from './CodeableConceptBuilder';

/**
 * @description Concept - reference to a terminology or just text.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @property {IElement} _text - Extension of text element
 * @see https://www.hl7.org/fhir/datatypes.html#CodeableConcept CodeableConcept
 * @author Roberto Araneda
 * @example JSON Template
 * {
 *   // from Element: extension
 *   "coding" : [{ Coding }], // Code defined by a terminology system
 *   "text" : "<string>" // Plain text representation of the concept
 * }
 */
export default class CodeableConcept extends Element implements ICodeableConcept {
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

  static builder(): ICodeableConceptBuilder {
    return new CodeableConceptBuilder();
  }

  constructor(args?: ICodeableConcept) {
    super();
    Object.assign(this, args);
  }
}
