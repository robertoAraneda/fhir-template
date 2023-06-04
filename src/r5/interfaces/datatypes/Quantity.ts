import { Element } from '../base/Element';
import { QuantityComparator } from '../../enums/QuantityComparator';
import { QuantityComparatorType } from '../../types/QuantityComparatorType';

export interface Quantity extends Element {
  value?: number;
  _value?: Element;
  comparator?: QuantityComparator | QuantityComparatorType;
  _comparator?: Element;
  unit?: string;
  _unit?: Element;
  system?: string;
  _system?: Element;
  code?: string;
  _code?: Element;
}
