import { IElement, IResource } from '../../interfaces/base';
import { ResourceTypeR4FromArray } from '../../GlobalResourceTypes';

export default abstract class Resource implements IResource {
  resourceType: ResourceTypeR4FromArray;
  id?: number | string;

  language?: string;
  implicitRules?: string;

  meta?: any;

  _implicitRules?: IElement;
  _language?: IElement;

  static builder: () => any;
  abstract toJson(): any;
  abstract toString(): string;
  abstract toPrettyString(): string;
}
