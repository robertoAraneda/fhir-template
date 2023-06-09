import { INarrative } from './INarrative';
import { IResource } from './IResource';
import { IExtension } from '../datatypes';

export interface IDomainResource extends IResource {
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
}
