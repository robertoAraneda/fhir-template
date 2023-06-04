import { CodeableReference, CodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export class EncounterDiagnosisBuilder extends BackboneElementBuilder<EncounterDiagnosisBuilder> {
  condition?: CodeableReference[];
  use?: CodeableConcept[];
}
