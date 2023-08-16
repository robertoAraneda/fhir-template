import { IBackboneElement } from '../base';
import { ICodeableReference, IPeriod } from '../datatypes';

export default interface ICompositionEvent extends IBackboneElement {
  period?: IPeriod;
  detail?: ICodeableReference[];
}
