import { Element } from './Element';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

export class CodeableReference<T> extends Element {
  concept?: CodeableConcept;
  reference?: Reference<T>;
}
