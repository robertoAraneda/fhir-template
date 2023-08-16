import { IExtension } from '../datatypes';
import IElement from './IElement';

export default interface IBackboneElement extends IElement {
  modifierExtension?: IExtension[];
}
