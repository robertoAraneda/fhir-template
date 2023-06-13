import { ICodeableReference, ICodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export default class EncounterDiagnosisBuilder extends BackboneElementBuilder<EncounterDiagnosisBuilder> {
  condition?: ICodeableReference[];
  use?: ICodeableConcept[];
}
