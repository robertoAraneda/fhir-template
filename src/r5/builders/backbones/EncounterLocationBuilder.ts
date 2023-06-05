import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IReference } from '../../interfaces/base';
import { EncounterLocationStatusEnum } from '../../enums';
import { EncounterLocationStatusType } from '../../types';
import { ICodeableConcept, IPeriod } from '../../interfaces/datatypes';

export class EncounterLocationBuilder extends BackboneElementBuilder<EncounterLocationBuilder> {
  location: IReference;
  status?: EncounterLocationStatusEnum | EncounterLocationStatusType;
  form?: ICodeableConcept;
  period?: IPeriod;
}
