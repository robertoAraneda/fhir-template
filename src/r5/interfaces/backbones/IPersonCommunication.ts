import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

export default interface IPersonCommunication extends IBackboneElement {
  language: ICodeableConcept;
  preferred?: boolean;
  _preferred?: IElement;
}
