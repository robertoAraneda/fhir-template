import Resource from '../base/Resource';
import { IBundle } from '../../interfaces/resources';
import { BundleTypeEnum } from '../../enums';
import { BundleTypeType } from '../../types';
import { IElement } from '../../interfaces/base';
import { IIdentifier, ISignature } from '../../interfaces/datatypes';
import { IBundleEntry, IBundleLink } from '../../interfaces/backbones';
import { BundleBuilder } from './BundleBuilder';
import { BundleValidator } from './BundleValidator';

export default class Bundle extends Resource implements IBundle {
  resourceType = 'Bundle' as const;
  entry?: IBundleEntry[];
  identifier?: IIdentifier;
  link?: IBundleLink[];
  signature?: ISignature;
  timestamp?: string;
  total?: number;
  type: BundleTypeEnum | BundleTypeType;

  _timestamp?: IElement;
  _total?: IElement;
  _type?: IElement;

  toJson(): Bundle {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Bundle${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Bundle${JSON.stringify(this.toJson())}`;
  }

  static builder(): BundleBuilder {
    return new BundleBuilder();
  }

  constructor(args: IBundle) {
    super();
    args.resourceType = 'Bundle';
    BundleValidator(args);
    Object.assign(this, args);
  }
}
