import { ICodeableConcept, ICodeableReference, IReference } from '../../interfaces/datatypes';
import Element from '../base/Element';
import CodeableReferenceBuilder from './CodeableReferenceBuilder';
import { CodeableReferenceValidator } from './CodeableReferenceValidator';

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
export default class CodeableReference extends Element implements ICodeableReference {
  /**
   * @description Reference to a concept (by class)
   */
  concept?: ICodeableConcept;

  /**
   * @description Reference to a resource (by instance)
   */
  reference?: IReference;

  static builder(): CodeableReferenceBuilder {
    return new CodeableReferenceBuilder();
  }

  toJson(): CodeableReference {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `CodeableReference${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `CodeableReference${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: ICodeableReference) {
    super();
    CodeableReferenceValidator(args);
    Object.assign(this, args);
  }
}
