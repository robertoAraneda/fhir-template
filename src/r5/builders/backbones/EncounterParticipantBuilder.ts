import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { CodeableConcept, Period } from '../../interfaces/datatypes';
import { Reference } from '../../interfaces/base';

export class EncounterParticipantBuilder extends BackboneElementBuilder<EncounterParticipantBuilder> {
  type?: CodeableConcept[];
  period?: Period;
  actor?: Reference;
}
