import { ICoding, IExtension, IMeta } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class Meta implements IMeta {
  // Base Properties from IElement
  id?: string;
  extension?: IExtension[];

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

  constructor(args?: IMeta) {
    Object.assign(this, args);
  }
}
