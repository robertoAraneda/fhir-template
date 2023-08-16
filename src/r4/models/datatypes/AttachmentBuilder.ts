import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import Attachment from './Attachment';
import { IAttachment } from '../../interfaces/datatypes';

type ParamExtensionType = 'contentType' | 'creation' | 'data' | 'hash' | 'language' | 'title' | 'url' | 'size';

export interface IAttachmentBuilder extends IBuildable<Attachment>, IElementBuilder<AttachmentBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): AttachmentBuilder;

  setContentType(contentType: string): AttachmentBuilder;

  setLanguage(language: string): AttachmentBuilder;

  setData(data: string): AttachmentBuilder;

  setUrl(url: string): AttachmentBuilder;

  setTitle(title: string): AttachmentBuilder;

  setCreation(creation: string): AttachmentBuilder;

  setHash(hash: string): AttachmentBuilder;

  setSize(size: number): AttachmentBuilder;
}

export class AttachmentBuilder extends ElementBuilder<AttachmentBuilder> implements IAttachmentBuilder {
  private readonly attachment: IAttachment;

  constructor() {
    super();
    this.attachment = {} as IAttachment;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): AttachmentBuilder {
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

  build(): Attachment {
    Object.assign(this.attachment, { ...super.entity() });
    return new Attachment(this.attachment).toJson();
  }
}
