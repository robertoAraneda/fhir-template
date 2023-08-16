import { IIdentifier } from './index';
import { IElement } from '../base';

export default interface IReference extends IElement {
  // Reference attributes
  reference?: string;
  type?: string;
  identifier?: IIdentifier;
  display?: string;

  // Extensions
  _display?: IElement;
  _type?: IElement;
  _reference?: IElement;
}
