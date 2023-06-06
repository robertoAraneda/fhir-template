import { IElement, IReference } from '../base';
import { ICodeableConcept } from './ICodeableConcept';

/**
 * @description Reference to a resource or a concept.
 * @property {ICodeableConcept} concept - Reference to a concept (by class)
 * @property {IReference} reference - Reference to a resource (by instance)
 * @extends {IElement}
 * @see https://www.hl7.org/fhir/references.html#CodeableReference CodeableReference
 * @author Roberto Araneda
 */
export interface ICodeableReference extends IElement {
  /**
   * @description Reference to a concept (by class)
   */
  concept?: ICodeableConcept;

  /**
   * @description Reference to a resource (by instance)
   */
  reference?: IReference;
}
