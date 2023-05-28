import { CodeableConcept } from './CodeableConcept';
import { BackboneElement } from './BackboneElement';

export class PersonCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;

  constructor(args?: Partial<PersonCommunication>) {
    super();
    Object.assign(this, args);
  }
}
