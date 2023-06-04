import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Reference } from '../../interfaces/base/Reference';
import { EncounterLocationStatus } from '../../enums/EncounterLocationStatus';
import { EncounterLocationStatusType } from '../../types/EncounterLocationStatusType';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Period } from '../../interfaces/datatypes/Period';

export class EncounterLocationBuilder extends BackboneElementBuilder<EncounterLocationBuilder> {
  location: Reference;
  status?: EncounterLocationStatus | EncounterLocationStatusType;
  form?: CodeableConcept;
  period?: Period;
}
