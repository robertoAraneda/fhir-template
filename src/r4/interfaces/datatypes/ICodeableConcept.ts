import { IElement } from '../base';
import { ICoding } from './ICoding';

/**
 * @description Concept - reference to a terminology or just text.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @extends {IElement}
 * @see https://www.hl7.org/fhir/datatypes.html#CodeableConcept CodeableConcept
 * @author Roberto Araneda
 */
export interface ICodeableConcept extends IElement {
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
}
