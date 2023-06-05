import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IIdentifier, ICodeableConcept } from '../../interfaces/datatypes';
import { IReference } from '../../interfaces/base';

export class EncounterAdmissionBuilder extends BackboneElementBuilder<EncounterAdmissionBuilder> {
  preAdmissionIdentifier?: IIdentifier;
  origin: IReference;
  admitSource?: ICodeableConcept;
  reAdmission?: ICodeableConcept;
  destination?: IReference;
  dischargeDisposition?: ICodeableConcept;
}
