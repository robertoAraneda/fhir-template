import { Coding } from '../datatypes/Coding';
import { Meta } from '../datatypes/Meta';

export class MetaBuilder {
  private _versionId: string | number;
  private _lastUpdated: string;
  private _source: string;
  private _profile: string[];
  private _security: Coding[];
  private _tag: Coding[];

  setVersionId(versionId: string | number): MetaBuilder {
    this._versionId = versionId;

    return this;
  }

  getVersionId(): string | number {
    return this._versionId;
  }

  setLastUpdated(lastUpdated: string): MetaBuilder {
    this._lastUpdated = lastUpdated;

    return this;
  }

  getLastUpdated(): string {
    return this._lastUpdated;
  }

  setSource(source: string): MetaBuilder {
    this._source = source;

    return this;
  }

  getSource(): string {
    return this._source;
  }

  setMultipleProfile(profile: string[]): MetaBuilder {
    this._profile = profile;

    return this;
  }

  setProfile(index: number, profile: string): MetaBuilder {
    if (!this._profile) this._profile = [];

    this._profile[index] = profile;

    return this;
  }

  addProfile(profile: string): MetaBuilder {
    if (!this._profile) this._profile = [];
    this._profile.push(profile);

    return this;
  }

  getProfile(index: number): string {
    return this._profile[index];
  }

  getProfiles(): string[] {
    if (!this._profile) return [];
    return this._profile;
  }

  setMultipleSecurity(security: Coding[]): MetaBuilder {
    this._security = security;

    return this;
  }

  setSecurity(index: number, security: Coding): MetaBuilder {
    if (!this._security) this._security = [];
    this._security[index] = security;

    return this;
  }

  addSecurity(security: Coding): MetaBuilder {
    if (!this._security) this._security = [];
    this._security.push(security);

    return this;
  }

  getSecurity(index: number): Coding {
    return this._security[index];
  }

  getSecurities(): Coding[] {
    if (!this._security) return [];
    return this._security;
  }

  setMultipleTag(tag: Coding[]): MetaBuilder {
    this._tag = tag;

    return this;
  }

  setTag(index: number, tag: Coding): MetaBuilder {
    if (!this._tag) this._tag = [];
    this._tag[index] = tag;

    return this;
  }

  addTag(tag: Coding): MetaBuilder {
    if (!this._tag) this._tag = [];
    this._tag.push(tag);

    return this;
  }

  getTag(index: number): Coding {
    return this._tag[index];
  }

  getTags(): Coding[] {
    if (!this._tag) return [];

    return this._tag;
  }

  build(): Meta {
    return new Meta({
      versionId: this._versionId,
      lastUpdated: this._lastUpdated,
      source: this._source,
      profile: this._profile,
      security: this._security,
      tag: this._tag,
    });
  }
}
