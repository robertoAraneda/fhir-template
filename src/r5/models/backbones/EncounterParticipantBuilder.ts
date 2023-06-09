import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
export default class EncounterParticipantBuilder extends BackboneElementBuilder<EncounterParticipantBuilder> {
  type?: ICodeableConcept[];
  period?: IPeriod;
  actor?: IReference;
}
