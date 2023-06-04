import { CodeableReference } from '../../interfaces/datatypes/CodeableReference';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export class EncounterDiagnosisBuilder extends BackboneElementBuilder<EncounterDiagnosisBuilder> {
  condition?: CodeableReference[];
  use?: CodeableConcept[];
}
