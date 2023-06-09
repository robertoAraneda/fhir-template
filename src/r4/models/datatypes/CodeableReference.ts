import { ICodeableConcept, ICodeableReference, IExtension } from '../../interfaces/datatypes';
import { IReference } from '../../interfaces/base';

/**
 * @description Reference to a resource or a concept.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {ICodeableConcept} concept - Reference to a concept (by class)
 * @property {IReference} reference - Reference to a resource (by instance)
 * @implements {ICodeableReference}
 * @see https://www.hl7.org/fhir/references.html#CodeableReference CodeableReference
 * @author Roberto Araneda
 */
export class CodeableReference implements ICodeableReference {
  /**
   * @description Unique id for inter-element referencing
   */
  id?: string;

  /**
   * @description Additional content defined by implementations
   */
  extension?: IExtension[];

  /**
   * @description Reference to a concept (by class)
   */
  concept?: ICodeableConcept;

  /**
   * @description Reference to a resource (by instance)
   */
  reference?: IReference;

  constructor(args?: ICodeableReference) {
    Object.assign(this, args);
  }
}
