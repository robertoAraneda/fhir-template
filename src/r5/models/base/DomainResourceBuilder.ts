import { ResourceBuilder } from './ResourceBuilder';
import { IResource, IDomainResource } from '../../interfaces/base';
import { IExtension, INarrative } from '../../interfaces/datatypes';

export interface IDomainResourceBuilder<BuilderClass> {
  setText(text: INarrative): BuilderClass;
  addContained(contained: IResource): BuilderClass;
  setMultipleContained(contained: IResource[]): BuilderClass;
  addExtension(extension: IExtension): BuilderClass;
  setMultipleExtension(extension: IExtension[]): BuilderClass;
  addModifierExtension(modifierExtension: IExtension): BuilderClass;
  setMultipleModifierExtension(modifierExtension: IExtension[]): BuilderClass;
}

export class DomainResourceBuilder<BuilderClass>
  extends ResourceBuilder<BuilderClass>
  implements IDomainResourceBuilder<BuilderClass>
{
  private readonly domainResource: IDomainResource;

  constructor() {
    super();
    this.domainResource = {} as IDomainResource;
  }

  setMultipleContained(contained: IResource[]): BuilderClass {
    this.domainResource.contained = contained;
    return this as unknown as BuilderClass;
  }

  setText(text: INarrative): BuilderClass {
    if (text.div) {
      if (!text.div.startsWith('<div')) throw new Error('Narrative.div must start with <div');
      if (!text.div.includes('xmlns="http://www.w3.org/1999/xhtml')) {
        throw new Error('Narrative.div must include the XHTML namespace');
      }
    }
    this.domainResource.text = text;

    return this as unknown as BuilderClass;
  }

  addContained(contained: any): BuilderClass {
    this.domainResource.contained = this.domainResource.contained || [];
    this.domainResource.contained.push(contained);
    return this as unknown as BuilderClass;
  }

  addExtension(extension: IExtension): BuilderClass {
    this.domainResource.extension = this.domainResource.extension || [];
    this.domainResource.extension.push(extension);

    return this as unknown as BuilderClass;
  }

  addModifierExtension(modifierExtension: IExtension): BuilderClass {
    this.domainResource.modifierExtension = this.domainResource.modifierExtension || [];
    this.domainResource.modifierExtension.push(modifierExtension);
    return this as unknown as BuilderClass;
  }

  setMultipleExtension(extension: IExtension[]): BuilderClass {
    this.domainResource.extension = extension;
    return this as unknown as BuilderClass;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): BuilderClass {
    this.domainResource.modifierExtension = modifierExtension;
    return this as unknown as BuilderClass;
  }

  entity(): IDomainResource {
    return {
      ...this.domainResource,
      ...super.entity(),
    };
  }
}
