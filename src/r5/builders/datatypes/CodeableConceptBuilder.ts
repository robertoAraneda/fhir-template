import { ICodeableConcept, ICoding } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { CodeableConcept } from '../../models/datatypes/CodeableConcept';

export class CodeableConceptBuilder
  extends ElementBuilder<CodeableConceptBuilder>
  implements IBuildable<ICodeableConcept>, ISerializable
{
  private codeableConcept: ICodeableConcept;

  constructor() {
    super();

    this.codeableConcept = new CodeableConcept();
  }

  fromJSON(json: ICodeableConcept) {
    this.codeableConcept = json;

    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): ICodeableConcept {
    return JSON.parse(this.serialize());
  }

  raw(): ICodeableConcept {
    return {
      ...this.codeableConcept,
      ...super.entity(),
    };
  }
}
