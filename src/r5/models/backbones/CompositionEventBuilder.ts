import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import CompositionEvent from './CompositionEvent';
import { IElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { ICodeableReference, IPeriod } from '../../interfaces/datatypes';
import ICompositionEvent from '../../interfaces/backbones/ICompositionEvent';

export interface ICompositionEventBuilder
  extends IBuildable<CompositionEvent>,
    IBackboneElementBuilder<CompositionEventBuilder>,
    IElementBuilder<CompositionEventBuilder> {
  addDetail(detail: ICodeableReference): this;
  addMultipleDetail(details: ICodeableReference[]): this;
  setPeriod(period: IPeriod): this;
}

export default class CompositionEventBuilder
  extends BackboneElementBuilder<CompositionEventBuilder>
  implements ICompositionEventBuilder
{
  private readonly _compositionEvent: ICompositionEvent;

  constructor() {
    super();
    this._compositionEvent = {} as ICompositionEvent;
  }

  addDetail(detail: ICodeableReference): this {
    this._compositionEvent.detail = this._compositionEvent.detail || [];
    this._compositionEvent.detail.push(detail);
    return this;
  }

  addMultipleDetail(details: ICodeableReference[]): this {
    details.forEach((detail) => this.addDetail(detail));
    return this;
  }

  setPeriod(period: IPeriod): this {
    this._compositionEvent.period = period;
    return this;
  }

  build(): CompositionEvent {
    Object.assign(this._compositionEvent, { ...super.entity() });
    return new CompositionEvent(this._compositionEvent).toJson();
  }
}
