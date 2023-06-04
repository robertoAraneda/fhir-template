import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { CodeableConcept, CodeableReference } from '../../interfaces/datatypes';

export class EncounterReasonBuilder extends BackboneElementBuilder<EncounterReasonBuilder> {
  use?: CodeableConcept[];
  value?: CodeableReference[];
}
