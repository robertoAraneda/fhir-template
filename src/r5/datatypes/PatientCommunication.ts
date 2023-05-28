import { CodeableConcept } from './CodeableConcept';
import { BackboneElement } from './BackboneElement';

export class PatientCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred?: boolean;

  constructor(args?: Partial<PatientCommunication>) {
    super();
    Object.assign(this, args);
  }
}
