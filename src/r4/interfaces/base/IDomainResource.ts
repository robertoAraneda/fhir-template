import { IResource } from './IResource';
import { IExtension, INarrative } from '../datatypes';

export interface IDomainResource extends IResource {
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
}
