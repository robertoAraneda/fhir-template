import { ICodeableConcept, ICoding } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';

export class CodeableConceptBuilder
  extends ElementBuilder<CodeableConceptBuilder>
  implements IBuildable<ICodeableConcept>, ISerializable
{
  private readonly codeableConcept: ICodeableConcept;

  constructor() {
    super();

    this.codeableConcept = {} as ICodeableConcept;
  }

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
