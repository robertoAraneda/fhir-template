import { NarrativeStatus } from '../../enums/NarrativeStatus';
import { NarrativeStatusType } from '../../types/NarrativeStatusType';

export interface Narrative {
  status: NarrativeStatus | NarrativeStatusType;
  div: string;
}
