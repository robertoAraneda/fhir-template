import { ISimpleQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { ISimpleQuantityBuilder, SimpleQuantityBuilder } from './SimpleQuantityBuilder';

export default class SimpleQuantity extends Element implements ISimpleQuantity {
  // SimpleQuantity attributes
  value?: number;
  unit?: string;
  system?: string;
  code?: string;

  // Extension attributes
  _code?: IElement;
  _value?: IElement;
  _unit?: IElement;
  _system?: IElement;

  static builder(): ISimpleQuantityBuilder {
    return new SimpleQuantityBuilder();
  }
  constructor(args?: ISimpleQuantity) {
    super();
    Object.assign(this, args);
  }
}
