import { NarrativeStatusEnum } from '../../../r4/enums';
import { NarrativeStatusType } from '../../../r4/types';
import { IElement } from '../base';

export default interface INarrative extends IElement {
  status: NarrativeStatusEnum | NarrativeStatusType;
  div: string;
}
