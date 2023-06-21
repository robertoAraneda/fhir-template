import { IElement, IResource } from '../../interfaces/base';
import Base from './Base';

export default abstract class Resource extends Base implements IResource {
  resourceType: string;
  id?: number | string;

  language?: string;
  implicitRules?: string;

  meta?: any;

  _implicitRules?: IElement;
  _language?: IElement;
}