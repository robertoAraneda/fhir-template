import { IResource } from '../../interfaces/base';

export interface IResourceBuilder<ClassBuilder> {
  setId(id: string): ClassBuilder;
  setMeta(meta: any): ClassBuilder;
  setImplicitRules(implicitRules: string): ClassBuilder;
  setLanguage(language: string): ClassBuilder;
  entity(): IResource;
}

export class ResourceBuilder<ClassBuilder> implements IResourceBuilder<ClassBuilder> {
  private readonly resource: IResource;

  constructor() {
    this.resource = {} as IResource;
  }

  setId(id: string): ClassBuilder {
    this.resource.id = id;
    return this as unknown as ClassBuilder;
  }

  setMeta(meta: any): ClassBuilder {
    this.resource.meta = meta;
    return this as unknown as ClassBuilder;
  }

  setImplicitRules(implicitRules: string): ClassBuilder {
    this.resource.implicitRules = implicitRules;
    return this as unknown as ClassBuilder;
  }

  setLanguage(language: string): ClassBuilder {
    this.resource.language = language;
    return this as unknown as ClassBuilder;
  }

  entity(): IResource {
    return {
      ...this.resource,
    };
  }
}
