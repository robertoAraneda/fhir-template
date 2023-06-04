import { BaseBuilder } from './BaseBuilder';
import { Resource } from '../../interfaces/base/Resource';
import { Element } from '../../interfaces/base/Element';

type ResourceParamExtension = 'language' | 'implicitRules';
export class ResourceBuilder<ClassBuilder> extends BaseBuilder<ClassBuilder> {
  private readonly resource: Resource;

  constructor() {
    super();
    this.resource = {} as Resource;
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

  entity(): Resource {
    return {
      ...super.entity(),
      ...this.resource,
    };
  }
}
