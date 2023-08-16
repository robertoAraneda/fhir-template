import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { Attachment } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IAttachment } from '../../interfaces/datatypes';

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

interface IAttachmentBuilder extends IBuildable<Attachment>, IElementBuilder<AttachmentBuilder> {
  addAttachmentParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  setContentType(contentType: string): this;
  setLanguage(language: string): this;
  setData(data: string): this;
  setUrl(url: string): this;
  setTitle(title: string): this;
  setCreation(creation: string): this;
  setHash(hash: string): this;
  setSize(size: number): this;
  setDuration(duration: number): this;
  setWidth(width: number): this;
  setHeight(height: number): this;
  setFrames(frames: number): this;
  setPages(pages: number): this;
}
export default class AttachmentBuilder extends ElementBuilder<AttachmentBuilder> implements IAttachmentBuilder {
  private readonly attachment: IAttachment;

  constructor() {
    super();
    this.attachment = {} as IAttachment;
  }

  addAttachmentParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.attachment[`_${param}`] = extension;
    return this;
  }

  setContentType(contentType: string): this {
    this.attachment.contentType = contentType;
    return this;
  }

  setLanguage(language: string): this {
    this.attachment.language = language;
    return this;
  }

  setData(data: string): this {
    this.attachment.data = data;
    return this;
  }

  setUrl(url: string): this {
    this.attachment.url = url;
    return this;
  }

  setSize(size: number): this {
    this.attachment.size = size;
    return this;
  }

  setHash(hash: string): this {
    this.attachment.hash = hash;
    return this;
  }

  setTitle(title: string): this {
    this.attachment.title = title;
    return this;
  }

  setCreation(creation: string): this {
    this.attachment.creation = creation;
    return this;
  }

  setHeight(height: number): this {
    this.attachment.height = height;
    return this;
  }

  setWidth(width: number): this {
    this.attachment.width = width;
    return this;
  }

  setFrames(frames: number): this {
    this.attachment.frames = frames;
    return this;
  }

  setDuration(duration: number): this {
    this.attachment.duration = duration;
    return this;
  }

  setPages(pages: number): this {
    this.attachment.pages = pages;
    return this;
  }

  build(): Attachment {
    Object.assign(this.attachment, { ...super.entity() });
    return new Attachment(this.attachment).toJson();
  }
}
