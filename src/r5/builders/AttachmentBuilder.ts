import { Attachment } from '../datatypes/Attachment';

export class AttachmentBuilder {
  private _contentType: string;
  private _language: string;
  private _data: string;
  private _url: string;
  private _size: number;
  private _hash: string;
  private _title: string;
  private _creation: string;
  private _height: number;
  private _width: number;
  private _frames: number;
  private _duration: number;
  /**
   * Number of printed pages
   */
  private _pages: number;

  setContentType(contentType: string): AttachmentBuilder {
    this._contentType = contentType;

    return this;
  }

  getContentType(): string {
    return this._contentType;
  }

  setLanguage(language: string): AttachmentBuilder {
    this._language = language;

    return this;
  }

  getLanguage(): string {
    return this._language;
  }

  setData(data: string): AttachmentBuilder {
    this._data = data;

    return this;
  }

  getData(): string {
    return this._data;
  }

  setUrl(url: string): AttachmentBuilder {
    this._url = url;

    return this;
  }

  getUrl(): string {
    return this._url;
  }

  setSize(size: number): AttachmentBuilder {
    this._size = size;

    return this;
  }

  getSize(): number {
    return this._size;
  }

  setHash(hash: string): AttachmentBuilder {
    this._hash = hash;

    return this;
  }

  getHash(): string {
    return this._hash;
  }

  setTitle(title: string): AttachmentBuilder {
    this._title = title;

    return this;
  }

  getTitle(): string {
    return this._title;
  }

  setCreation(creation: string): AttachmentBuilder {
    this._creation = creation;

    return this;
  }

  getCreation(): string {
    return this._creation;
  }

  setHeight(height: number): AttachmentBuilder {
    this._height = height;

    return this;
  }

  getHeight(): number {
    return this._height;
  }

  setWidth(width: number): AttachmentBuilder {
    this._width = width;

    return this;
  }

  getWidth(): number {
    return this._width;
  }

  setFrames(frames: number): AttachmentBuilder {
    this._frames = frames;

    return this;
  }

  getFrames(): number {
    return this._frames;
  }

  setDuration(duration: number): AttachmentBuilder {
    this._duration = duration;

    return this;
  }

  getDuration(): number {
    return this._duration;
  }

  setPages(pages: number): AttachmentBuilder {
    this._pages = pages;

    return this;
  }

  getPages(): number {
    return this._pages;
  }

  build(): Attachment {
    return new Attachment({
      contentType: this._contentType,
      language: this._language,
      data: this._data,
      url: this._url,
      size: this._size,
      hash: this._hash,
      title: this._title,
      creation: this._creation,
      height: this._height,
      width: this._width,
      frames: this._frames,
      duration: this._duration,
      pages: this._pages,
    });
  }
}
