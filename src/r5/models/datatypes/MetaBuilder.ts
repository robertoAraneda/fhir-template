import { ICoding, IMeta } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { Meta } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

type ParamsType = 'lastUpdated' | 'source' | 'versionId';

interface IMetaBuilder extends IBuildable<Meta>, IElementBuilder<MetaBuilder> {
  addParamExtension<T extends ParamsType>(param: T, extension: IElement): this;
  setSource(source: string): this;
  setVersionId(versionId: string | number): this;
  setLastUpdated(lastUpdated: string): this;
  addTag(tag: ICoding): this;
  addProfile(profile: string): this;
  addSecurity(security: ICoding): this;
  setMultipleTag(tag: ICoding[]): this;
  setMultipleProfile(profile: string[]): this;
  setMultipleSecurity(security: ICoding[]): this;
}
export default class MetaBuilder extends ElementBuilder<MetaBuilder> implements IMetaBuilder {
  private readonly meta: IMeta;

  constructor() {
    super();
    this.meta = {} as IMeta;
  }

  addParamExtension<T extends ParamsType>(param: T, extension: IElement): this {
    this.meta[`_${param}`] = extension as IElement;

    return this;
  }

  setSource(source: string): this {
    this.meta.source = source;
    return this;
  }

  setMultipleTag(tag: ICoding[]): this {
    this.meta.tag = tag;
    return this;
  }

  setVersionId(versionId: string | number): this {
    this.meta.versionId = versionId;
    return this;
  }

  setLastUpdated(lastUpdated: string): this {
    this.meta.lastUpdated = lastUpdated;
    return this;
  }

  setMultipleProfile(profile: string[]): this {
    this.meta.profile = profile;
    return this;
  }

  setMultipleSecurity(security: ICoding[]): this {
    this.meta.security = security;
    return this;
  }

  addTag(tag: ICoding): this {
    this.meta.tag = this.meta.tag || [];
    this.meta.tag.push(tag);
    return this;
  }

  addProfile(profile: string): this {
    this.meta.profile = this.meta.profile || [];
    this.meta.profile.push(profile);
    return this;
  }

  addSecurity(security: ICoding): this {
    this.meta.security = this.meta.security || [];
    this.meta.security.push(security);
    return this;
  }

  build(): Meta {
    Object.assign(this.meta, { ...super.entity() });
    return new Meta(this.meta).toJson();
  }
}
