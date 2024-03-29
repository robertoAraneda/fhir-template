import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ICoding, IMeta } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import Meta from './Meta';

type ParamsExtensionType = 'lastUpdated' | 'source' | 'versionId';

export interface IMetaBuilder extends IBuildable<Meta>, IElementBuilder<MetaBuilder> {
  addParamExtension(param: ParamsExtensionType, extension: IElement): MetaBuilder;

  setSource(source: string): MetaBuilder;

  setVersionId(versionId: string | number): MetaBuilder;

  setLastUpdated(lastUpdated: string): MetaBuilder;

  addTag(tag: ICoding): MetaBuilder;

  addProfile(profile: string): MetaBuilder;

  addSecurity(security: ICoding): MetaBuilder;

  setMultipleTag(tag: ICoding[]): MetaBuilder;

  setMultipleProfile(profile: string[]): MetaBuilder;

  setMultipleSecurity(security: ICoding[]): MetaBuilder;
}

export class MetaBuilder extends ElementBuilder<MetaBuilder> implements IMetaBuilder {
  private readonly meta: IMeta;

  constructor() {
    super();

    this.meta = {} as IMeta;
  }

  addParamExtension<T extends ParamsExtensionType>(param: T, extension: IElement): MetaBuilder {
    this.meta[`_${param}`] = extension as IElement;

    return this;
  }

  setSource(source: string): MetaBuilder {
    this.meta.source = source;
    return this;
  }

  setMultipleTag(tag: ICoding[]): MetaBuilder {
    this.meta.tag = tag;
    return this;
  }

  setVersionId(versionId: string | number): MetaBuilder {
    this.meta.versionId = versionId;
    return this;
  }

  setLastUpdated(lastUpdated: string): MetaBuilder {
    this.meta.lastUpdated = lastUpdated;
    return this;
  }

  setMultipleProfile(profile: string[]): MetaBuilder {
    this.meta.profile = profile;
    return this;
  }

  setMultipleSecurity(security: ICoding[]): MetaBuilder {
    this.meta.security = security;
    return this;
  }

  addTag(tag: ICoding): MetaBuilder {
    this.meta.tag = this.meta.tag || [];
    this.meta.tag.push(tag);
    return this;
  }

  addProfile(profile: string): MetaBuilder {
    this.meta.profile = this.meta.profile || [];
    this.meta.profile.push(profile);
    return this;
  }

  addSecurity(security: ICoding): MetaBuilder {
    this.meta.security = this.meta.security || [];
    this.meta.security.push(security);
    return this;
  }

  build(): Meta {
    Object.assign(this.meta, { ...super.entity() });
    return new Meta(this.meta).toJson();
  }
}
