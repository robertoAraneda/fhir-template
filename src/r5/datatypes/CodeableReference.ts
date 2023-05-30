import { Element } from './Element';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';
import { DomainResource } from './DomainResource';

export class CodeableReference<T extends DomainResource | string> extends Element {
  concept?: CodeableConcept;
  reference?: Reference<T>;
}
