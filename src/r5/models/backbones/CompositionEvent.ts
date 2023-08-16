import BackboneElement from '../base/BackboneElement';
import { ICodeableConcept, ICodeableReference, IPeriod, IReference } from '../../interfaces/datatypes';
import CompositionEventBuilder from './CompositionEventBuilder';
import { CompositionEventValidator } from './CompositionEventValidator';
import ICompositionEvent from '../../interfaces/backbones/ICompositionEvent';

export default class CompositionEvent extends BackboneElement implements ICompositionEvent {
  detail?: ICodeableReference[];
  period?: IPeriod;

  toJson(): CompositionEvent {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CompositionEvent${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CompositionEvent${JSON.stringify(this.toJson())}`;
  }

  static builder(): CompositionEventBuilder {
    return new CompositionEventBuilder();
  }

  constructor(args: ICompositionEvent) {
    super();
    CompositionEventValidator(args);
    Object.assign(this, args);
  }
}
