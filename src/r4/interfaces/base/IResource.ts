import { IMeta } from '../datatypes';
import { IElement } from './IElement';
import { ResourceTypeR4FromArray } from '../../GlobalResourceTypes';

export interface IResource {
  resourceType: ResourceTypeR4FromArray;
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;
}
