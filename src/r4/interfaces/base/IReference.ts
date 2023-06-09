import { IIdentifier } from '../datatypes';
import { IElement } from './IElement';

export interface IReference extends IElement {
  reference?: string;
  display?: string;
  identifier?: IIdentifier;
  type?: string;
  _display?: IElement;
  _type?: IElement;
  _reference?: IElement;
}
