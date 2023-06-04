import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Reference } from '../../interfaces/base';
import { EncounterLocationStatus } from '../../enums/EncounterLocationStatus';
import { EncounterLocationStatusType } from '../../types/EncounterLocationStatusType';
import { CodeableConcept, Period } from '../../interfaces/datatypes';

export class EncounterLocationBuilder extends BackboneElementBuilder<EncounterLocationBuilder> {
  location: Reference;
  status?: EncounterLocationStatus | EncounterLocationStatusType;
  form?: CodeableConcept;
  period?: Period;
}
