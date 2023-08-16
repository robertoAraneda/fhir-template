import BackboneElement from '../base/BackboneElement';
import { ICompositionEvent } from '../../interfaces/backbones';
import { ICodeableConcept, IPeriod, IReference } from '../../interfaces/datatypes';
import CompositionEventBuilder from './CompositionEventBuilder';
import { CompositionEventValidator } from './CompositionEventValidator';

export default class CompositionEvent extends BackboneElement implements ICompositionEvent {
  code?: ICodeableConcept[];
  detail?: IReference[];
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

  static getAttributes(): string[] {
    return ['code', 'detail', 'period', 'id', 'extension', 'modifierExtension'];
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
