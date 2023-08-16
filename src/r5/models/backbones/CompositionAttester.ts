import BackboneElement from '../base/BackboneElement';
import { ICodeableConcept, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import CompositionAttesterBuilder from './CompositionAttesterBuilder';
import { CompositionAttesterValidator } from './CompositionAttesterValidator';
import ICompositionAttester from '../../interfaces/backbones/ICompositionAttester';

export default class CompositionAttester extends BackboneElement implements ICompositionAttester {
  mode: ICodeableConcept;
  party?: IReference;
  time?: string;
  _time?: IElement;

  toJson(): CompositionAttester {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CompositionAttester${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CompositionAttester${JSON.stringify(this.toJson())}`;
  }

  static builder(): CompositionAttesterBuilder {
    return new CompositionAttesterBuilder();
  }

  constructor(args: ICompositionAttester) {
    super();
    CompositionAttesterValidator(args);
    Object.assign(this, args);
  }
}
