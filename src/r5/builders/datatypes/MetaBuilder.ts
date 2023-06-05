import { ICoding, IMeta } from '../../interfaces/datatypes';
import { IElement, ISerializable, IBuildable } from '../../interfaces/base';
import { ElementBuilder } from '../base/ElementBuilder';

type ParamsType = 'lastUpdated' | 'profile' | 'source' | 'versionId';
export class MetaBuilder extends ElementBuilder<MetaBuilder> implements IBuildable<IMeta>, ISerializable {
  private readonly meta: IMeta;

  constructor() {
    super();

    this.meta = {} as IMeta;
  }

  addMetaParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'profile' ? IElement[] : IElement,
  ): MetaBuilder {
    if (param === 'profile') {
      this.meta._profile = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamsType, 'profile'>;
      this.meta[`_${localParam}`] = extension as IElement;
    }

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

  raw(): IMeta {
    return {
      ...this.meta,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): IMeta {
    return JSON.parse(this.serialize());
  }
}
