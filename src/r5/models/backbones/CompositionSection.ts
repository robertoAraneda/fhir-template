import BackboneElement from '../base/BackboneElement';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, INarrative, IReference } from '../../interfaces/datatypes';
import CompositionSectionBuilder from './CompositionSectionBuilder';
import { CompositionSectionValidator } from './CompositionSectionValidator';
import ICompositionSection from '../../interfaces/backbones/ICompositionSection';

export default class CompositionSection extends BackboneElement implements ICompositionSection {
  _title?: IElement;
  author?: IReference[];
  code?: ICodeableConcept;
  emptyReason?: ICodeableConcept;
  entry?: IReference[];
  focus?: IReference;
  orderedBy?: ICodeableConcept;
  section?: ICompositionSection[];
  text?: INarrative;
  title?: string;

  toJson(): CompositionSection {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `CompositionSection${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `CompositionSection${JSON.stringify(this.toJson())}`;
  }

  static builder(): CompositionSectionBuilder {
    return new CompositionSectionBuilder();
  }

  constructor(args: ICompositionSection) {
    super();
    CompositionSectionValidator(args);
    Object.assign(this, args);
  }
}
