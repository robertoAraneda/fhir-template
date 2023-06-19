import { ICodeableConcept, ICoding, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

/**
 * @description Concept - reference to a terminology or just text.
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {ICoding[]} coding - Code defined by a terminology system
 * @property {string} text - Plain text representation of the concept
 * @property {IElement} _text - Extension of text element
 * @see https://www.hl7.org/fhir/datatypes.html#CodeableConcept CodeableConcept
 * @author Roberto Araneda
 * @example JSON Template
 * {
 *   // from Element: extension
 *   "coding" : [{ Coding }], // Code defined by a terminology system
 *   "text" : "<string>" // Plain text representation of the concept
 * }
 */
export default class CodeableConcept extends Element implements ICodeableConcept {
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

  static builder(): ICodeableConceptBuilder {
    return new CodeableConceptBuilder();
  }

  constructor(args?: ICodeableConcept) {
    super();
    Object.assign(this, args);
  }
}

export interface ICodeableConceptBuilder
  extends IBuildable<ICodeableConcept>,
    ISerializable,
    IElementBuilder<ICodeableConceptBuilder> {
  addCodeableConceptParamExtension(param: 'text', extension: IElement): CodeableConceptBuilder;
  addCoding(coding: ICoding): CodeableConceptBuilder;
  setMultipleCoding(coding: ICoding[]): CodeableConceptBuilder;
  setText(text: string): CodeableConceptBuilder;
}
class CodeableConceptBuilder extends ElementBuilder<CodeableConceptBuilder> implements ICodeableConceptBuilder {
  private readonly codeableConcept: ICodeableConcept;

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

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): ICodeableConcept {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): ICodeableConcept {
    return {
      ...this.codeableConcept,
      ...super.entity(),
    };
  }
}
