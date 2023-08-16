import { IMeta } from '../datatypes';
import IBase from './IBase';
import IElement from './IElement';
import { ResourceTypeR5FromArray } from '../../GlobalResourceTypes';

export default interface IResource extends IBase {
  resourceType: ResourceTypeR5FromArray;
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;
}
