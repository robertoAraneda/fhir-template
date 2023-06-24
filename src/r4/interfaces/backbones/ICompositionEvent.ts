import { IBackboneElement } from '../base';
import { ICodeableConcept, IPeriod, IReference } from '../datatypes';

export default interface ICompositionEvent extends IBackboneElement {
  code?: ICodeableConcept[];
  period?: IPeriod;
  detail?: IReference[];
}
