import { BackboneElement } from '../../datatypes/BackboneElement';
import { Identifier } from '../../datatypes/Identifier';
import { Reference } from '../../datatypes/Reference';
import { CodeableConcept } from '../../datatypes/CodeableConcept';

type EncounterAdmissionOriginReference = any;
type EncounterAdmissionDestinationReference = any;
export class EncounterAdmission extends BackboneElement {
  preAdmissionIdentifier?: Identifier;
  origin: Reference<EncounterAdmissionOriginReference>;
  admitSource?: CodeableConcept;
  reAdmission?: CodeableConcept;
  destination?: Reference<EncounterAdmissionDestinationReference>;
  dischargeDisposition?: CodeableConcept;
  constructor(args?: Partial<EncounterAdmission>) {
    super();
    Object.assign(this, args);
  }
}
