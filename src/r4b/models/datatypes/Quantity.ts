import { IExtension, IQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';

export class Quantity implements IQuantity {
  // Base Properties from IElement
  id: string;
  extension: IExtension[];

  // Quantity Properties
  code: string;
  comparator: QuantityComparatorEnum | QuantityComparatorType;
  system: string;
  unit: string;
  value: number;

  // Quantity Extensions
  _code: IElement;
  _comparator: IElement;
  _system: IElement;
  _unit: IElement;
  _value: IElement;

  constructor(args?: IQuantity) {
    Object.assign(this, args);
  }
}
