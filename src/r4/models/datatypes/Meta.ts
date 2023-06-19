import { ICoding, IExtension, IMeta } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

export default class Meta extends Element implements IMeta {
  // Meta Properties
  versionId?: string | number;
  lastUpdated?: string;
  source?: string;
  profile?: string[];
  security?: ICoding[];
  tag?: ICoding[];

  // Meta Extensions
  _versionId?: IElement;
  _lastUpdated?: IElement;
  _source?: IElement;

  static builder(): IMetaBuilder {
    return new MetaBuilder();
  }

  constructor(args?: IMeta) {
    super();
    Object.assign(this, args);
  }
}

type ParamsType = 'lastUpdated' | 'source' | 'versionId';

export interface IMetaBuilder extends IBuildable<IMeta>, ISerializable, IElementBuilder<IMetaBuilder> {
  addParamExtension(param: ParamsType, extension: IElement): MetaBuilder;
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
class MetaBuilder extends ElementBuilder<MetaBuilder> implements IMetaBuilder {
  private readonly meta: IMeta;

  constructor() {
    super();

    this.meta = {} as IMeta;
  }

  addParamExtension<T extends ParamsType>(param: T, extension: IElement): MetaBuilder {
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

  compileAsDefault(): IMeta {
    return {
      ...this.meta,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IMeta {
    return JSON.parse(this.buildAsString());
  }
}
