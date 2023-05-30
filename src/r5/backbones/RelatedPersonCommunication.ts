import { CodeableConcept } from '../datatypes/CodeableConcept';
import { BackboneElement } from '../datatypes/BackboneElement';

export class RelatedPersonCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;

  constructor(args?: Partial<RelatedPersonCommunication>) {
    super();
    Object.assign(this, args);
  }
}
