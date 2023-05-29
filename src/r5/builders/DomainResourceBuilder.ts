import { DomainResource } from '../datatypes/DomainResource';
import { BaseBuilder } from './BaseBuilder';
import { Narrative } from '../datatypes/Narrative';
import { Extension } from '../datatypes/Extension';
import { Meta } from '../datatypes/Meta';

export class DomainResourceBuilder<T extends DomainResourceBuilder<T, U>, U extends DomainResource> {
  protected _id: number | string;
  protected _meta: Meta;
  protected _implicitRules: string;
  protected _language: string;
  protected _text: Narrative;
  protected _contained: any[];
  protected _extension: Extension[];
  protected _modifierExtension: Extension[];

  setId(id: number | string): T {
    this._id = id;

    return this as unknown as T;
  }

  getId(): number | string {
    return this._id;
  }

  setMeta(meta: Meta): T {
    this._meta = meta;

    return this as unknown as T;
  }

  getMeta() {
    return this._meta;
  }

  setImplicitRules(implicitRules: string): T {
    this._implicitRules = implicitRules;

    return this as unknown as T;
  }

  getImplicitRules(): string {
    return this._implicitRules;
  }

  setLanguage(language: string): T {
    this._language = language;

    return this as unknown as T;
  }

  getLanguage(): string {
    return this._language;
  }

  setText(text: Narrative): T {
    if (text.div) {
      if (!text.div.startsWith('<div')) throw new Error('Narrative.div must start with <div');
      if (!text.div.includes('xmlns="http://www.w3.org/1999/xhtml')) {
        throw new Error('Narrative.div must include the XHTML namespace');
      }
    }
    this._text = text;

    return this as unknown as T;
  }

  getText(): Narrative {
    return this._text;
  }

  addContainedResource<R>(contained: R): T {
    if (!this._contained) this._contained = [];
    this._contained.push(contained);

    return this as unknown as T;
  }

  setContainedResource<R>(index: number, contained: R): T {
    if (!this._contained) this._contained = [];
    this._contained[index] = contained;

    return this as unknown as T;
  }

  setMultipleContainedResource(items: any[]): T {
    this._contained = items;

    return this as unknown as T;
  }

  getContainedResource(index: number) {
    return this._contained[index];
  }

  getAllContainedResource(): DomainResource[] {
    if (!this._contained) return [];
    return this._contained;
  }

  addExtension(extension: Extension): T {
    if (!this._extension) this._extension = [];
    this._extension.push(extension);

    return this as unknown as T;
  }

  setExtension(index: number, extension: Extension): T {
    if (!this._extension) this._extension = [];
    this._extension[index] = extension;

    return this as unknown as T;
  }

  setExtensions(extensions: Extension[]): T {
    this._extension = extensions;

    return this as unknown as T;
  }

  getExtension(index: number): Extension {
    return this._extension[index];
  }

  getExtensions(): Extension[] {
    if (!this._extension) return [];
    return this._extension;
  }

  addModifierExtension(modifierExtension: Extension): T {
    if (!this._modifierExtension) this._modifierExtension = [];
    this._modifierExtension.push(modifierExtension);

    return this as unknown as T;
  }

  setModifierExtension(index: number, modifierExtension: Extension): T {
    if (!this._modifierExtension) this._modifierExtension = [];
    this._modifierExtension[index] = modifierExtension;

    return this as unknown as T;
  }

  setModifierExtensions(modifierExtensions: Extension[]): T {
    this._modifierExtension = modifierExtensions;

    return this as unknown as T;
  }

  getModifierExtension(index: number): Extension {
    return this._modifierExtension[index];
  }

  getModifierExtensions(): Extension[] {
    if (!this._modifierExtension) return [];
    return this._modifierExtension;
  }

  build() {
    const domainResource = {
      id: this._id,
      meta: this._meta,
      implicitRules: this._implicitRules,
      language: this._language,
      text: this._text,
      contained: this._contained,
      extension: this._extension,
      modifierExtension: this._modifierExtension,
    } as DomainResource;

    return domainResource;
  }
}
