import { IMeta } from '../datatypes';
import { IBase } from './IBase';
import { IElement } from './IElement';

export interface IResource extends IBase {
  resourceType: string;
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;
}
