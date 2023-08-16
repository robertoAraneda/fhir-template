import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import CompositionEvent from './CompositionEvent';
import { IElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
import { ValidateReferenceFormatHelper } from '../../../globals/helpers/validateReferenceFormatHelper';
import { ICompositionEvent } from '../../interfaces/backbones';

export interface ICompositionEventBuilder
  extends IBuildable<CompositionEvent>,
    IBackboneElementBuilder<CompositionEventBuilder>,
    IElementBuilder<CompositionEventBuilder> {
  addCode(code: ICodeableConcept): CompositionEventBuilder;
  addMultipleCode(codes: ICodeableConcept[]): CompositionEventBuilder;
  addDetail(detail: IReference): CompositionEventBuilder;
  addMultipleDetail(details: IReference[]): CompositionEventBuilder;
  setPeriod(period: IPeriod): CompositionEventBuilder;
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

  addDetail(detail: IReference): CompositionEventBuilder {
    if (detail.reference) ValidateReferenceFormatHelper(detail.reference, 'all');
    this._compositionEvent.detail = this._compositionEvent.detail || [];
    this._compositionEvent.detail.push(detail);
    return this;
  }

  addMultipleDetail(details: IReference[]): CompositionEventBuilder {
    details.forEach((detail) => this.addDetail(detail));
    return this;
  }

  setPeriod(period: IPeriod): CompositionEventBuilder {
    this._compositionEvent.period = period;
    return this;
  }

  addCode(code: ICodeableConcept): CompositionEventBuilder {
    this._compositionEvent.code = this._compositionEvent.code || [];
    this._compositionEvent.code.push(code);
    return this;
  }

  addMultipleCode(codes: ICodeableConcept[]): CompositionEventBuilder {
    this._compositionEvent.code = codes;
    return this;
  }

  build(): CompositionEvent {
    Object.assign(this._compositionEvent, { ...super.entity() });
    return new CompositionEvent(this._compositionEvent).toJson();
  }
}
