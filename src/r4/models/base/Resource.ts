import { IElement, IResource } from '../../interfaces/base';

export default abstract class Resource implements IResource {
  resourceType: string;
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
