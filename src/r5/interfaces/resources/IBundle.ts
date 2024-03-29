import { IElement, IResource } from '../base';
import { IIdentifier, ISignature } from '../datatypes';
import { BundleTypeEnum } from '../../enums';
import { BundleTypeType } from '../../types';
import { IBundleLink, IBundleEntry } from '../backbones';

export default interface IBundle extends IResource {
  resourceType: 'Bundle';
  identifier?: IIdentifier;
  type: BundleTypeEnum | BundleTypeType;
  timestamp?: string;
  total?: number;
  link?: IBundleLink[];
  entry?: IBundleEntry[];
  signature?: ISignature;
  issues?: any;

  _type?: IElement;
  _timestamp?: IElement;
  _total?: IElement;
}
