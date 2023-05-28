import { DomainResource } from '../datatypes/DomainResource';
import { BaseBuilder } from './BaseBuilder';
import { Narrative } from '../datatypes/Narrative';
import { Extension } from '../datatypes/Extension';
import { Meta } from '../datatypes/Meta';

export class DomainResourceBuilder<T extends DomainResourceBuilder<T, U>, U extends DomainResource> {
  private id: number | string;
  private meta: Meta;
  private implicitRules: string;
  private language: string;
  private _text: Narrative;
  private _contained: DomainResource[];
  private _extension: Extension[];
  private _modifierExtension: Extension[];

  setId(id: number | string): T {
    this.id = id;

    return this as unknown as T;
  }

  getId(): number | string {
    return this.id;
  }

  setMeta(meta: any): T {
    this.meta = meta;

    return this as unknown as T;
  }

  getMeta() {
    return this.meta;
  }

  setImplicitRules(implicitRules: string): T {
    this.implicitRules = implicitRules;

    return this as unknown as T;
  }

  getImplicitRules(): string {
    return this.implicitRules;
  }

  setLanguage(language: string): T {
    this.language = language;

    return this as unknown as T;
  }

  getLanguage(): string {
    return this.language;
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

  addContainedResource(contained: DomainResource): T {
    if (!this._contained) this._contained = [];
    this._contained.push(contained);

    return this as unknown as T;
  }

  setContainedResource(index: number, contained: DomainResource): T {
    if (!this._contained) this._contained = [];
    this._contained[index] = contained;

    return this as unknown as T;
  }

  setMultipleContainedResource(containeds: DomainResource[]): T {
    this._contained = containeds;

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

  build(): DomainResource {
    return {
      id: this.id,
      meta: this.meta,
      implicitRules: this.implicitRules,
      language: this.language,
      text: this._text,
      contained: this._contained,
      extension: this._extension,
      modifierExtension: this._modifierExtension,
    };
  }
}
