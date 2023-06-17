import { IExtension, ISimpleQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export default class SimpleQuantity implements ISimpleQuantity {
  // Element attributes
  id: string;
  extension: IExtension[];

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
  constructor(args?: ISimpleQuantity) {
    Object.assign(this, args);
  }
}
