import { Coding } from '../../interfaces/datatypes/Coding';
import { Element } from '../../interfaces/base/Element';
import { Meta } from '../../interfaces/datatypes/Meta';
import { ElementBuilder } from '../base/ElementBuilder';
import { Serialize } from '../../interfaces/base/Serialize';
import { Build } from '../../interfaces/base/Build';

type ParamsType = 'lastUpdated' | 'profile' | 'source' | 'versionId';
export class MetaBuilder extends ElementBuilder<MetaBuilder> implements Build<Meta>, Serialize {
  private readonly meta: Meta;

  constructor() {
    super();

    this.meta = {} as Meta;
  }

  addMetaParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'profile' ? Element[] : Element,
  ): MetaBuilder {
    if (param === 'profile') {
      this.meta._profile = extension as Element[];
    } else {
      const localParam = param as Exclude<ParamsType, 'profile'>;
      this.meta[`_${localParam}`] = extension as Element;
    }

    return this;
  }

  setSource(source: string): MetaBuilder {
    this.meta.source = source;
    return this;
  }

  setMultipleTag(tag: Coding[]): MetaBuilder {
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

  setMultipleSecurity(security: Coding[]): MetaBuilder {
    this.meta.security = security;
    return this;
  }

  addTag(tag: Coding): MetaBuilder {
    this.meta.tag = this.meta.tag || [];
    this.meta.tag.push(tag);
    return this;
  }

  addProfile(profile: string): MetaBuilder {
    this.meta.profile = this.meta.profile || [];
    this.meta.profile.push(profile);
    return this;
  }

  addSecurity(security: Coding): MetaBuilder {
    this.meta.security = this.meta.security || [];
    this.meta.security.push(security);
    return this;
  }

  raw(): Meta {
    return {
      ...this.meta,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): Meta {
    return JSON.parse(this.serialize());
  }
}
