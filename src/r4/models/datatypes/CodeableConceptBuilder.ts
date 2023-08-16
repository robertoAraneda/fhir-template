import { IBuildable } from '../../../globals/interfaces';
import { ICodeableConcept, ICoding } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import CodeableConcept from './CodeableConcept';

export interface ICodeableConceptBuilder extends IBuildable<CodeableConcept>, IElementBuilder<CodeableConceptBuilder> {
  addCodeableConceptParamExtension: (param: 'text', extension: IElement) => CodeableConceptBuilder;

  addCoding: (coding: ICoding) => CodeableConceptBuilder;

  setMultipleCoding: (coding: ICoding[]) => CodeableConceptBuilder;

  setText: (text: string) => CodeableConceptBuilder;
}

export class CodeableConceptBuilder extends ElementBuilder<CodeableConceptBuilder> implements ICodeableConceptBuilder {
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
  addCodeableConceptParamExtension(param: 'text', extension: IElement): CodeableConceptBuilder {
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
    return new CodeableConcept(this.codeableConcept).toJson();
  }
}
