import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IIdentifier, ICodeableConcept, IReference } from '../../interfaces/datatypes';

export class EncounterAdmissionBuilder extends BackboneElementBuilder<EncounterAdmissionBuilder> {
  preAdmissionIdentifier?: IIdentifier;
  origin: IReference;
  admitSource?: ICodeableConcept;
  reAdmission?: ICodeableConcept;
  destination?: IReference;
  dischargeDisposition?: ICodeableConcept;
}
