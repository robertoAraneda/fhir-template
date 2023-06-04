import { BackboneElement } from '../../datatypes/BackboneElement';
import { Reference } from '../../datatypes/Reference';
import { EncounterLocationStatus } from '../../enums/EncounterLocationStatus';
import { EncounterLocationStatusType } from '../../types/EncounterLocationStatusType';
import { CodeableConcept } from '../../datatypes/CodeableConcept';
import { Period } from '../../datatypes/Period';

type EncounterLocationLocationReference = any;
export class EncounterLocation extends BackboneElement {
  location: Reference<EncounterLocationLocationReference>;
  status?: EncounterLocationStatus | EncounterLocationStatusType;
  form?: CodeableConcept;
  period?: Period;
  constructor(args?: Partial<EncounterLocation>) {
    super();
    Object.assign(this, args);
  }
}
