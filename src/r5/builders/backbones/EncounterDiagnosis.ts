import { BackboneElement } from '../../datatypes/BackboneElement';
import { CodeableReference } from '../../datatypes/CodeableReference';
import { CodeableConcept } from '../../datatypes/CodeableConcept';

type EncounterDiagnosisConditionReference = any;
export class EncounterDiagnosis extends BackboneElement {
  condition?: CodeableReference<EncounterDiagnosisConditionReference>[];
  use?: CodeableConcept[];
  constructor(args?: Partial<EncounterDiagnosis>) {
    super();
    Object.assign(this, args);
  }
}
