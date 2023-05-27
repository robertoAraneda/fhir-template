import { Coding } from '../datatypes/Coding';
import { CodeableConcept } from '../datatypes/CodeableConcept';

export class CodeableConceptBuilder {
  private _coding: Coding[];
  private _text: string;

  addCoding(coding: Coding): CodeableConceptBuilder {
    if (!this._coding) {
      this._coding = [];
    }
    this._coding.push(coding);
    return this;
  }

  setCoding(index: number, coding: Coding): CodeableConceptBuilder {
    if (!this._coding) {
      this._coding = [];
    }
    this._coding[index] = coding;
    return this;
  }

  setMultipleCoding(coding: Coding[]): CodeableConceptBuilder {
    this._coding = coding;
    return this;
  }

  setText(text: string): CodeableConceptBuilder {
    this._text = text;
    return this;
  }

  getCoding(index: number): Coding | null {
    if (!this._coding) return null;
    return this._coding[index];
  }

  getAllCoding(): Coding[] {
    if (!this._coding) return [];
    return this._coding;
  }
  getText(): string {
    return this._text;
  }

  build(): CodeableConcept {
    return new CodeableConcept({
      coding: this._coding,
      text: this._text,
    });
  }
}
