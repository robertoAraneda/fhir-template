import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept, IPeriod } from '../../interfaces/datatypes';
import { IReference } from '../../interfaces/base';

export class EncounterParticipantBuilder extends BackboneElementBuilder<EncounterParticipantBuilder> {
  type?: ICodeableConcept[];
  period?: IPeriod;
  actor?: IReference;
}
