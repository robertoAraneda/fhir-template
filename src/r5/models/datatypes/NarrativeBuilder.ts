import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { NarrativeStatusEnum } from '../../../r4/enums';
import { NarrativeStatusType } from '../../../r4/types';
import { INarrative } from '../../interfaces/datatypes';
import { Narrative } from './Narrative';

interface INarrativeBuilder extends IBuildable<Narrative>, IElementBuilder<NarrativeBuilder> {
  setDiv(div: string): this;
  setStatus(status: NarrativeStatusEnum | NarrativeStatusType): this;
}

export class NarrativeBuilder extends ElementBuilder<NarrativeBuilder> implements INarrativeBuilder {
  private readonly narrative: INarrative;

  constructor() {
    super();
    this.narrative = {} as INarrative;
  }

  setStatus(status: NarrativeStatusEnum | NarrativeStatusType): this {
    this.narrative.status = status;
    return this;
  }

  setDiv(div: string): this {
    this.narrative.div = div;
    return this;
  }

  build(): Narrative {
    Object.assign(this.narrative, super.entity());
    return new Narrative(this.narrative).toJson();
  }
}
