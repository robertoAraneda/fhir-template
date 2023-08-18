import { IElement } from '../base';
import ICodeableConcept from './ICodeableConcept';
import IQuantity from './IQuantity';
import IRange from './IRange';
import IReference from './IReference';
import ICoding from './ICoding';

export default interface IUsageContext extends IElement {
  code: ICoding;
  valueCodeableConcept?: ICodeableConcept;
  valueQuantity?: IQuantity;
  valueRange?: IRange;
  valueReference?: IReference;
}
