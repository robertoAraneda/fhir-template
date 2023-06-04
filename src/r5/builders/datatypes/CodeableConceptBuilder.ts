import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Element } from '../../interfaces/base/Element';
import { Coding } from '../../interfaces/datatypes/Coding';
import { ElementBuilder } from '../base/ElementBuilder';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';

export class CodeableConceptBuilder
  extends ElementBuilder<CodeableConceptBuilder>
  implements Build<CodeableConcept>, Serialize
{
  private readonly codeableConcept: CodeableConcept;

  constructor() {
    super();

    this.codeableConcept = {} as CodeableConcept;
  }

  addCodeableConceptParamExtension(param: 'text', extension: Element): CodeableConceptBuilder {
    this.codeableConcept[`_${param}`] = extension;

    return this;
  }

  addCoding(coding: Coding): CodeableConceptBuilder {
    this.codeableConcept.coding = this.codeableConcept.coding || [];

    this.codeableConcept.coding.push(coding);
    return this;
  }

  setMultipleCoding(coding: Coding[]): CodeableConceptBuilder {
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

  build(): CodeableConcept {
    return JSON.parse(this.serialize());
  }

  raw(): CodeableConcept {
    return {
      ...this.codeableConcept,
      ...super.entity(),
    };
  }
}
