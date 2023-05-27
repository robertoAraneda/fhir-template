import { Coding } from './Coding';

export class CodeableConcept {
  coding?: Coding[];
  text?: string;
  constructor(args?: Partial<CodeableConcept>) {
    Object.assign(this, args);
  }
}
