import { IAttachment } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import AttachmentBuilder from './AttachmentBuilder';
import { AttachmentValidator } from './AttachmentValidator';

/**
 * @example ```json
 * JSON Template
 * {
 *   // from Element: extension
 *   "contentType" : "<code>", // I Mime type of the content, with charset etc.
 *   "language" : "<code>", // Human language of the content (BCP-47)
 *   "data" : "<base64Binary>", // I Data inline, base64ed
 *   "url" : "<url>", // Uri where the data can be found
 *   "size" : "<integer64>", // Number of bytes of content (if url provided)
 *   "hash" : "<base64Binary>", // Hash of the data (sha-1, base64ed)
 *   "title" : "<string>", // Label to display in place of the data
 *   "creation" : "<dateTime>", // Date attachment was first created
 *   "height" : "<positiveInt>", // Height of the image in pixels (photo/video)
 *   "width" : "<positiveInt>", // Width of the image in pixels (photo/video)
 *   "frames" : "<positiveInt>", // Number of frames if > 1 (photo)
 *   "duration" : <decimal>, // Length in seconds (audio / video)
 *   "pages" : "<positiveInt>" // Number of printed pages
 * }
 */
export default class Attachment extends Element implements IAttachment {
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

  static builder(): AttachmentBuilder {
    return new AttachmentBuilder();
  }

  toJson(): Attachment {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Attachment${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Attachment${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IAttachment) {
    super();
    AttachmentValidator(args);
    Object.assign(this, args);
  }
}
