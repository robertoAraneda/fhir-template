import { NarrativeStatusEnum } from '../../enums';
import { NarrativeStatusType } from '../../types';

export interface INarrative {
  status: NarrativeStatusEnum | NarrativeStatusType;
  div: string;
}
