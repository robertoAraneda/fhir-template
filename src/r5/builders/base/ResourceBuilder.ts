import { BaseBuilder } from './BaseBuilder';
import { IResource, IElement } from '../../interfaces/base';

type ResourceParamExtension = 'language' | 'implicitRules';
export class ResourceBuilder<ClassBuilder> extends BaseBuilder<ClassBuilder> {
  private readonly resource: IResource;

  constructor() {
    super();
    this.resource = {} as IResource;
  }

  addResourceParamExtension(param: ResourceParamExtension, extension: Element): ClassBuilder {
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

  setResourceType(resourceType: string): ClassBuilder {
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
