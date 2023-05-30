import { CodeableConcept } from '../datatypes/CodeableConcept';
import { BackboneElement } from '../datatypes/BackboneElement';

export class PersonCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;

  constructor(args?: Partial<PersonCommunication>) {
    super();
    Object.assign(this, args);
  }
}
