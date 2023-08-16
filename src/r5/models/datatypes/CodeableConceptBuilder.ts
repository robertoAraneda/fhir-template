import { ICodeableConcept, ICoding } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { CodeableConcept } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

interface ICodeableConceptBuilder extends IBuildable<CodeableConcept>, IElementBuilder<CodeableConceptBuilder> {
  addParamExtension(param: 'text', extension: IElement): this;
  addCoding(coding: ICoding): this;
  setMultipleCoding(coding: ICoding[]): this;
  setText(text: string): this;
}
export default class CodeableConceptBuilder
  extends ElementBuilder<CodeableConceptBuilder>
  implements ICodeableConceptBuilder
{
  private readonly codeableConcept: ICodeableConcept;

  constructor() {
    super();

    this.codeableConcept = {} as ICodeableConcept;
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
  addParamExtension(param: 'text', extension: IElement): this {
    this.codeableConcept[`_${param}`] = extension;

    return this;
  }

  addCoding(coding: ICoding): this {
    this.codeableConcept.coding = this.codeableConcept.coding || [];

    this.codeableConcept.coding.push(coding);
    return this;
  }

  setMultipleCoding(coding: ICoding[]): this {
    this.codeableConcept.coding = coding;
    return this;
  }

  setText(text: string): this {
    this.codeableConcept.text = text;
    return this;
  }

  build(): CodeableConcept {
    Object.assign(this.codeableConcept, { ...super.entity() });
    return new CodeableConcept(this.codeableConcept).toJson();
  }
}
