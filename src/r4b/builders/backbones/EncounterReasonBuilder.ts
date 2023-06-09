import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { ICodeableConcept, ICodeableReference } from '../../interfaces/datatypes';

export class EncounterReasonBuilder extends BackboneElementBuilder<EncounterReasonBuilder> {
  use?: ICodeableConcept[];
  value?: ICodeableReference[];
}
