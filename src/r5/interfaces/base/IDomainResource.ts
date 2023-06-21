import { INarrative } from '../datatypes/INarrative';
import { IResource } from './IResource';
import { IExtension } from '../datatypes';

export interface IDomainResource extends IResource {
  text?: INarrative;
  // TODO: Figure out how to handle this
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
}
