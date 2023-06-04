import { Meta } from '../datatypes/Meta';
import { Base } from './Base';
import { Element } from './Element';

export interface Resource extends Base {
  resourceType: string;
  id?: number | string;
  meta?: Meta;
  implicitRules?: string;
  _implicitRules?: Element;
  language?: string;
  _language?: Element;
}
