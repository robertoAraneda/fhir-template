import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Identifier } from '../../interfaces/datatypes/Identifier';
import { Reference } from '../../interfaces/base/Reference';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';

export class EncounterAdmissionBuilder extends BackboneElementBuilder<EncounterAdmissionBuilder> {
  preAdmissionIdentifier?: Identifier;
  origin: Reference;
  admitSource?: CodeableConcept;
  reAdmission?: CodeableConcept;
  destination?: Reference;
  dischargeDisposition?: CodeableConcept;
}
