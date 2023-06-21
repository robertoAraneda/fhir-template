import { ICoding } from '../../interfaces/datatypes';
import { ElementBuilder } from '../base/ElementBuilder';
import { CodeableConcept } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';
import { IElement } from '../../interfaces/base';

interface ICodeableConceptBuilder extends IBuildable<CodeableConcept>, IElementBuilder<CodeableConceptBuilder> {
  addParamExtension(param: 'text', extension: IElement): CodeableConceptBuilder;
  addCoding(coding: ICoding): CodeableConceptBuilder;
  setMultipleCoding(coding: ICoding[]): CodeableConceptBuilder;
  setText(text: string): CodeableConceptBuilder;
}
export default class CodeableConceptBuilder
  extends ElementBuilder<CodeableConceptBuilder>
  implements ICodeableConceptBuilder
{
  private readonly codeableConcept: CodeableConcept;

  constructor() {
    super();

    this.codeableConcept = new CodeableConcept();
  }

  /**
   * @description Add a param extension to the codeable concept
   * @param {string} param The param to add the extension to
   * @param {IElement} extension The extension to add
   * @returns {CodeableConceptBuilder} The builder
   * @example ```typescript
   * const codeableConcept = new CodeableConceptBuilder()
   * .addCodeableConceptParamExtension('text', {
   *     "extension": [
   *          {
   *              url: "http://example.com",
   *              valueString: "example"
   *          }
   *      ]
   * })
   * .build();
   *
   * JSON generated:
   * {
   *  "_text": {
   *      "extension": [
   *          {
   *              url: "http://example.com",
   *              valueString: "example"
   *          }
   *      ]
   *    }
   * }
   * ```
   */
  addParamExtension(param: 'text', extension: IElement): CodeableConceptBuilder {
    this.codeableConcept[`_${param}`] = extension;

    return this;
  }

  addCoding(coding: ICoding): CodeableConceptBuilder {
    this.codeableConcept.coding = this.codeableConcept.coding || [];

    this.codeableConcept.coding.push(coding);
    return this;
  }

  setMultipleCoding(coding: ICoding[]): CodeableConceptBuilder {
    this.codeableConcept.coding = coding;
    return this;
  }

  setText(text: string): CodeableConceptBuilder {
    this.codeableConcept.text = text;
    return this;
  }

  build(): CodeableConcept {
    Object.assign(this.codeableConcept, { ...super.entity() });
    return this.codeableConcept.toJson();
  }
}
