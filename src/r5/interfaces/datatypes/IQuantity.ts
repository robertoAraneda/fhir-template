import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IElement } from '../base';

export default interface IQuantity extends IElement {
  value?: number;
  _value?: IElement;
  comparator?: QuantityComparatorEnum | QuantityComparatorType;
  _comparator?: IElement;
  unit?: string;
  _unit?: IElement;
  system?: string;
  _system?: IElement;
  code?: string;
  _code?: IElement;
}
