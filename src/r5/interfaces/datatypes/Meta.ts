import { Element } from '../base/Element';
import { Coding } from './Coding';

export interface Meta extends Element {
  versionId?: string | number;
  lastUpdated?: string;
  source?: string;
  profile?: string[];
  security?: Coding[];
  tag?: Coding[];
  _versionId?: Element;
  _lastUpdated?: Element;
  _source?: Element;
  _profile?: Element[];
}
