import INarrative from '../datatypes/INarrative';
import { IExtension } from '../datatypes';
import IResource from './IResource';

export default interface IDomainResource extends IResource {
  text?: INarrative;
  // TODO: Figure out how to handle this
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
}
