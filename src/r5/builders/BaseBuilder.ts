export class BaseBuilder {
  private _id: number | string;
  private _meta: any;
  private _implicitRules: string;
  private _language: string;

  setId(id: number | string): BaseBuilder {
    this._id = id;

    return this;
  }

  getId(): number | string {
    return this._id;
  }

  setMeta(meta: any): BaseBuilder {
    this._meta = meta;

    return this;
  }

  getMeta(): any {
    return this._meta;
  }

  setImplicitRules(implicitRules: string): BaseBuilder {
    this._implicitRules = implicitRules;

    return this;
  }

  getImplicitRules(): string {
    return this._implicitRules;
  }

  setLanguage(language: string): BaseBuilder {
    this._language = language;

    return this;
  }

  getLanguage(): string {
    return this._language;
  }
}
