import { Coding } from './Coding';
import { Element } from './Element';

export class Meta extends Element {
  versionId?: string | number;
  lastUpdated?: string;
  source?: string;
  profile?: string[];
  security?: Coding[];
  tag?: Coding[];
  constructor(args?: Partial<Meta>) {
    super();
    Object.assign(this, args);
  }
}
