import { Element } from '../base/Element';
import { Reference } from '../base/Reference';
import { CodeableConcept } from './CodeableConcept';

export interface CodeableReference extends Element {
  concept?: CodeableConcept;
  reference?: Reference;
}
