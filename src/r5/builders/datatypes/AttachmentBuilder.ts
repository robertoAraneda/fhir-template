import { IAttachment } from '../../interfaces/datatypes';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';
import { Attachment } from '../../models/datatypes/Attachment';

type ParamType =
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
export class AttachmentBuilder
  extends ElementBuilder<AttachmentBuilder>
  implements IBuildable<IAttachment>, ISerializable
{
  private attachment: IAttachment;

  constructor() {
    super();
    this.attachment = {} as IAttachment;
  }

  fromJSON(json: IAttachment) {
    this.attachment = json;
    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  addAttachmentParamExtension(param: ParamType, extension: IElement): AttachmentBuilder {
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

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IAttachment {
    return JSON.parse(this.serialize());
  }

  raw(): IAttachment {
    return {
      ...super.entity(),
      ...this.attachment,
    };
  }
}
