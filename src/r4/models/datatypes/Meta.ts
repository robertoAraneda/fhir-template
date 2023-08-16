import { ICoding, IMeta } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { MetaBuilder } from './MetaBuilder';
import { MetaValidator } from './MetaValidator';

export default class Meta extends Element implements IMeta {
  // Meta Properties
  versionId?: string | number;
  lastUpdated?: string;
  source?: string;
  profile?: string[];
  security?: ICoding[];
  tag?: ICoding[];

  // Meta Extensions
  _versionId?: IElement;
  _lastUpdated?: IElement;
  _source?: IElement;
  _profile?: IElement[];

  toJson(): Meta {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Meta${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Meta${JSON.stringify(this.toJson())}`;
  }

  static builder(): MetaBuilder {
    return new MetaBuilder();
  }

  constructor(args: IMeta) {
    super();
    MetaValidator(args);
    Object.assign(this, args);
  }
}
