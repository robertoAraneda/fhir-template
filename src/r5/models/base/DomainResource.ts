import Resource from './Resource';
import { IDomainResource } from '../../interfaces/base';
import { IExtension, INarrative } from '../../interfaces/datatypes';

export default class DomainResource extends Resource implements IDomainResource {
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
  text?: INarrative;

  constructor() {
    super();
  }
}
