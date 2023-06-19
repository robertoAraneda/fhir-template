import Element from './Element';
import { IExtension } from '../../interfaces/datatypes';

export default abstract class BackboneElement extends Element {
  modifierExtension?: IExtension[];
}
