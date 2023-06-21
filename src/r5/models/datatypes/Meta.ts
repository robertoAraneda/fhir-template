import { ICoding, IMeta } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import ExtensionBuilder from './ExtensionBuilder';
import MetaBuilder from './MetaBuilder';

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

  static builder(): MetaBuilder {
    return new MetaBuilder();
  }

  toJson(): Meta {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Meta${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Meta${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IMeta) {
    super();
    Object.assign(this, args);
  }
}
