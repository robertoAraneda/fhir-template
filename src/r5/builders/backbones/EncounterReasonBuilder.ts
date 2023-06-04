import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { CodeableReference } from '../../interfaces/datatypes/CodeableReference';

type EncounterReasonValueReference = any | string;
export class EncounterReasonBuilder extends BackboneElementBuilder<EncounterReasonBuilder> {
  use?: CodeableConcept[];
  value?: CodeableReference[];
}
