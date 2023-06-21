import { ICodeableConcept, ICodeableReference, IReference } from '../../interfaces/datatypes';
import { ElementBuilder } from '../base/ElementBuilder';
import { CodeableReference } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

interface ICodeableReferenceBuilder extends IBuildable<CodeableReference>, IElementBuilder<CodeableReferenceBuilder> {
  setConcept(concept: ICodeableConcept): CodeableReferenceBuilder;
  setReference(reference: IReference): CodeableReferenceBuilder;
}

export default class CodeableReferenceBuilder
  extends ElementBuilder<CodeableReferenceBuilder>
  implements ICodeableReferenceBuilder
{
  private readonly codeableReference: CodeableReference;

  constructor() {
    super();

    this.codeableReference = new CodeableReference();
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
   * @description Build the codeable reference
   * @returns {ICodeableReference} The codeable reference
   */
  build(): CodeableReference {
    Object.assign(this.codeableReference, { ...super.entity() });
    return this.codeableReference.toJson();
  }
}
