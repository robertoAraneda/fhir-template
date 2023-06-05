import { IElement, IReference } from '../base';
import { ICodeableConcept } from './ICodeableConcept';

export interface ICodeableReference extends IElement {
  concept?: ICodeableConcept;
  reference?: IReference;
}
