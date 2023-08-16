import Resource from './Resource';
import { IDomainResource } from '../../interfaces/base';
import { IExtension, INarrative } from '../../interfaces/datatypes';

export default abstract class DomainResource extends Resource implements IDomainResource {
  // TODO change any to Resource
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
  text?: INarrative;
}

export const domainResourceAttributes: readonly string[] = ['contained', 'extension', 'modifierExtension', 'text'];
