import { CodeableConcept } from '../datatypes/CodeableConcept';
import { BackboneElement } from '../datatypes/BackboneElement';

export class PatientCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;

  constructor(args?: Partial<PatientCommunication>) {
    super();
    Object.assign(this, args);
  }
}
