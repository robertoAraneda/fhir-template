import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { Identifier, CodeableConcept } from '../../interfaces/datatypes';
import { Reference } from '../../interfaces/base';

export class EncounterAdmissionBuilder extends BackboneElementBuilder<EncounterAdmissionBuilder> {
  preAdmissionIdentifier?: Identifier;
  origin: Reference;
  admitSource?: CodeableConcept;
  reAdmission?: CodeableConcept;
  destination?: Reference;
  dischargeDisposition?: CodeableConcept;
}
