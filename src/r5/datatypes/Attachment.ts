import { IAttachment, IExtension } from '../interfaces/datatypes';
import { IElement } from '../interfaces/base';

export class Attachment implements IAttachment {
  id?: string;
  extension?: IExtension[];
  contentType?: string;
  data?: string;
  language?: string;
  url?: string;
  size?: number;
  hash?: string;
  title?: string;
  creation?: string;
  height?: number;
  width?: number;
  frames?: number;
  duration?: number;
  pages?: number;
  _contentType?: IElement;
  _creation?: IElement;
  _data?: IElement;
  _duration?: IElement;
  _frames?: IElement;
  _hash?: IElement;
  _height?: IElement;
  _language?: IElement;
  _pages?: IElement;
  _size?: IElement;
  _title?: IElement;
  _url?: IElement;
  _width?: IElement;

  constructor(args?: IAttachment) {
    Object.assign(this, args);
  }
}
