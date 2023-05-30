import { BackboneElement } from '../datatypes/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { CodeableReference } from '../datatypes/CodeableReference';

type EncounterReasonValueReference = any | string;
export class EncounterReason extends BackboneElement {
  use?: CodeableConcept[];
  value?: CodeableReference<EncounterReasonValueReference>[];

  constructor(args?: Partial<EncounterReason>) {
    super();
    Object.assign(this, args);
  }
}
