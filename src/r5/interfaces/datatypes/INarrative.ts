import { NarrativeStatusEnum } from '../../../enums';
import { NarrativeStatusType } from '../../../types';
import { IElement } from '../base';

export default interface INarrative extends IElement {
  status: NarrativeStatusEnum | NarrativeStatusType;
  div: string;
}
