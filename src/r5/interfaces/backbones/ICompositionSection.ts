import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, INarrative, IReference } from '../datatypes';
import { CompositionSectionListModeEnum } from '../../../r4/enums';
import { CompositionSectionListModeType } from '../../../r4/types';

export default interface ICompositionSection extends IBackboneElement {
  title?: string;
  code?: ICodeableConcept;
  author?: IReference[];
  focus?: IReference;
  text?: INarrative;
  orderedBy?: ICodeableConcept;
  entry?: IReference[];
  emptyReason?: ICodeableConcept;
  section?: ICompositionSection[];
  _title?: IElement;
}
