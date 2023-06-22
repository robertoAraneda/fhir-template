import { BaseBuilder } from './BaseBuilder';
import { IResource } from '../../interfaces/base';
import { ResourceTypeR5FromArray } from '../../GlobalResourceTypes';

export interface IResourceBuilder<ClassBuilder> {
  setId(id: string): ClassBuilder;
  setMeta(meta: any): ClassBuilder;
  setImplicitRules(implicitRules: string): ClassBuilder;
  setLanguage(language: string): ClassBuilder;
  entity(): IResource;
}

type ParamExtensionType = 'language' | 'implicitRules';
export class ResourceBuilder<ClassBuilder> extends BaseBuilder<ClassBuilder> implements IResourceBuilder<ClassBuilder> {
  private readonly resource: IResource;

  constructor() {
    super();
    this.resource = {} as IResource;
  }

  addResourceParamExtension(param: ParamExtensionType, extension: Element): ClassBuilder {
    this.resource[`_${param}`] = extension;
    return this as unknown as ClassBuilder;
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

  setResourceType(resourceType: ResourceTypeR5FromArray): ClassBuilder {
    this.resource.resourceType = resourceType;
    return this as unknown as ClassBuilder;
  }

  entity(): IResource {
    return {
      ...super.entity(),
      ...this.resource,
    };
  }
}
