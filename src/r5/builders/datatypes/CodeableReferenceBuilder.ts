import { ICodeableConcept, ICodeableReference, IReference } from '../../interfaces/datatypes';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { CodeableReference } from '../../models/datatypes/CodeableReference';

export class CodeableReferenceBuilder
  extends ElementBuilder<CodeableReferenceBuilder>
  implements IBuildable<ICodeableReference>, ISerializable
{
  private codeableReference: ICodeableReference;

  constructor() {
    super();

    this.codeableReference = new CodeableReference();
  }

  /**
   * @description Create a new CodeableReference from a JSON representation
   * @param json The JSON to create the CodeableReference from
   * @returns build and serialize functions
   */
  fromJSON(json: ICodeableReference) {
    this.codeableReference = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  /**
   * @description Set the codeable concept
   * @param {ICodeableConcept} concept The codeable concept to set
   * @returns {CodeableReferenceBuilder} The builder
   */
  setConcept(concept: ICodeableConcept): CodeableReferenceBuilder {
    this.codeableReference.concept = concept;
    return this;
  }

  /**
   * @description Set the reference
   * @param reference The reference to set
   * @returns {CodeableReferenceBuilder} The builder
   */
  setReference(reference: IReference): CodeableReferenceBuilder {
    this.codeableReference.reference = reference;
    return this;
  }

  /**
   * @description Generate a String representation of the codeable reference
   * @returns {string} The codeable reference as a string
   */
  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  /**
   * @description Build the codeable reference
   * @returns {ICodeableReference} The codeable reference
   */
  build(): ICodeableReference {
    return JSON.parse(this.serialize());
  }

  /**
   * @description Get the raw codeable reference
   * @returns {ICodeableReference} The native codeable reference
   */
  raw(): ICodeableReference {
    return {
      ...this.codeableReference,
      ...super.entity(),
    };
  }
}
