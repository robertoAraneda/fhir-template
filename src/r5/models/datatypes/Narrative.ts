import Element from '../base/Element';
import { INarrative } from '../../interfaces/datatypes';
import { NarrativeStatusEnum } from '../../../r4/enums';
import { NarrativeStatusType } from '../../../r4/types';
import { NarrativeBuilder } from './NarrativeBuilder';

export class Narrative extends Element implements INarrative {
  status: NarrativeStatusEnum | NarrativeStatusType;
  div: string;

  toJson(): Narrative {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Narrative${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Narrative${JSON.stringify(this.toJson())}`;
  }

  static builder(): NarrativeBuilder {
    return new NarrativeBuilder();
  }

  constructor(args: INarrative) {
    super();

    Object.assign(this, args);
  }
}
