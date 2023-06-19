import { IAttachment } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

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

  static builder(): IAttachmentBuilder {
    return new AttachmentBuilder();
  }

  constructor(args?: IAttachment) {
    super();
    Object.assign(this, args);
  }
}

type ParamExtensionType =
  | 'contentType'
  | 'creation'
  | 'data'
  | 'duration'
  | 'frames'
  | 'hash'
  | 'height'
  | 'language'
  | 'pages'
  | 'size'
  | 'title'
  | 'url'
  | 'width';

export interface IAttachmentBuilder
  extends IBuildable<IAttachment>,
    ISerializable,
    IElementBuilder<IAttachmentBuilder> {
  addParamExtension(param: ParamExtensionType, extension: IElement): AttachmentBuilder;
  setContentType(contentType: string): AttachmentBuilder;
  setLanguage(language: string): AttachmentBuilder;
  setData(data: string): AttachmentBuilder;
  setUrl(url: string): AttachmentBuilder;
  setTitle(title: string): AttachmentBuilder;
  setCreation(creation: string): AttachmentBuilder;
  setHash(hash: string): AttachmentBuilder;
  setSize(size: number): AttachmentBuilder;
  setDuration(duration: number): AttachmentBuilder;
  setWidth(width: number): AttachmentBuilder;
  setHeight(height: number): AttachmentBuilder;
  setFrames(frames: number): AttachmentBuilder;
  setPages(pages: number): AttachmentBuilder;
}
class AttachmentBuilder extends ElementBuilder<AttachmentBuilder> implements IAttachmentBuilder {
  private readonly attachment: IAttachment;

  constructor() {
    super();
    this.attachment = {} as IAttachment;
  }

  addParamExtension(param: ParamExtensionType, extension: IElement): AttachmentBuilder {
    this.attachment[`_${param}`] = extension;
    return this;
  }

  setContentType(contentType: string): AttachmentBuilder {
    this.attachment.contentType = contentType;
    return this;
  }

  setLanguage(language: string): AttachmentBuilder {
    this.attachment.language = language;
    return this;
  }

  setData(data: string): AttachmentBuilder {
    this.attachment.data = data;
    return this;
  }

  setUrl(url: string): AttachmentBuilder {
    this.attachment.url = url;
    return this;
  }

  setSize(size: number): AttachmentBuilder {
    this.attachment.size = size;
    return this;
  }

  setHash(hash: string): AttachmentBuilder {
    this.attachment.hash = hash;
    return this;
  }

  setTitle(title: string): AttachmentBuilder {
    this.attachment.title = title;
    return this;
  }

  setCreation(creation: string): AttachmentBuilder {
    this.attachment.creation = creation;
    return this;
  }

  setHeight(height: number): AttachmentBuilder {
    this.attachment.height = height;
    return this;
  }

  setWidth(width: number): AttachmentBuilder {
    this.attachment.width = width;
    return this;
  }

  setFrames(frames: number): AttachmentBuilder {
    this.attachment.frames = frames;
    return this;
  }

  setDuration(duration: number): AttachmentBuilder {
    this.attachment.duration = duration;
    return this;
  }

  setPages(pages: number): AttachmentBuilder {
    this.attachment.pages = pages;
    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IAttachment {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IAttachment {
    return {
      ...super.entity(),
      ...this.attachment,
    };
  }
}
