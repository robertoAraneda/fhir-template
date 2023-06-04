import { Extension } from '../datatypes/Extension';
import { Element } from './Element';

export interface BackboneElement extends Element {
  modifierExtension?: Extension[];
}
