import { IElement, IResource } from '../../interfaces/base';
import Base from './Base';
import { ResourceTypeR5FromArray } from '../../GlobalResourceTypes';

export default class Resource extends Base implements IResource {
  resourceType: ResourceTypeR5FromArray;
  id?: number | string;

  language?: string;
  implicitRules?: string;

  meta?: any;

  _implicitRules?: IElement;
  _language?: IElement;

  toString(): string {
    throw new Error('Method not implemented.');
  }

  toJson(): any {
    throw new Error('Method not implemented.');
  }

  toPrettyString(): string {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }
}
