import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Period } from '../../interfaces/datatypes/Period';
import { Reference } from '../../interfaces/base/Reference';

export class EncounterParticipantBuilder extends BackboneElementBuilder<EncounterParticipantBuilder> {
  type?: CodeableConcept[];
  period?: Period;
  actor?: Reference;
}
