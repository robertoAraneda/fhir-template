import BackboneElement from '../base/BackboneElement';
import { ICompositionSection } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, INarrative, IReference } from '../../interfaces/datatypes';
import { CompositionSectionListModeEnum } from '../../enums';
import { CompositionSectionListModeType } from '../../types';
import CompositionSectionBuilder from './CompositionSectionBuilder';
import { CompositionSectionValidator } from './CompositionSectionValidator';

export default class CompositionSection extends BackboneElement implements ICompositionSection {
  _title?: IElement;
  _mode?: IElement;
  author?: IReference[];
  code?: ICodeableConcept;
  emptyReason?: ICodeableConcept;
  entry?: IReference[];
  focus?: IReference;
  mode?: CompositionSectionListModeEnum | CompositionSectionListModeType;
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

  static getListMode(): CompositionSectionListModeEnum[] {
    return Object.values(CompositionSectionListModeEnum);
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
