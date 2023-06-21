import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { EncounterLocationStatusEnum } from '../../enums';
import { EncounterLocationStatusType } from '../../types';
import { ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';

export default class EncounterLocationBuilder extends BackboneElementBuilder<EncounterLocationBuilder> {
  location: IReference;
  status?: EncounterLocationStatusEnum | EncounterLocationStatusType;
  form?: ICodeableConcept;
  period?: IPeriod;
}
