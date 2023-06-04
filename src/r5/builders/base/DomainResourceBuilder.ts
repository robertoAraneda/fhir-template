import { ResourceBuilder } from './ResourceBuilder';
import { Narrative } from '../../interfaces/base/Narrative';
import { Resource } from '../../interfaces/base/Resource';
import { Extension } from '../../interfaces/datatypes/Extension';
import { DomainResource } from '../../interfaces/base/DomainResource';

export class DomainResourceBuilder<BuilderClass> extends ResourceBuilder<BuilderClass> {
  private readonly domainResource: DomainResource;

  constructor() {
    super();
    this.domainResource = {} as DomainResource;
  }

  setText(text: Narrative): BuilderClass {
    if (text.div) {
      if (!text.div.startsWith('<div')) throw new Error('Narrative.div must start with <div');
      if (!text.div.includes('xmlns="http://www.w3.org/1999/xhtml')) {
        throw new Error('Narrative.div must include the XHTML namespace');
      }
    }
    this.domainResource.text = text;

    return this as unknown as BuilderClass;
  }

  addContained(contained: Resource): BuilderClass {
    this.domainResource.contained = this.domainResource.contained || [];
    this.domainResource.contained.push(contained);
    return this as unknown as BuilderClass;
  }

  addExtension(extension: Extension): BuilderClass {
    this.domainResource.extension = this.domainResource.extension || [];
    this.domainResource.extension.push(extension);

    return this as unknown as BuilderClass;
  }

  addModifierExtension(modifierExtension: Extension): BuilderClass {
    this.domainResource.modifierExtension = this.domainResource.modifierExtension || [];
    this.domainResource.modifierExtension.push(modifierExtension);
    return this as unknown as BuilderClass;
  }

  setMultipleExtension(extension: Extension[]): BuilderClass {
    this.domainResource.extension = extension;
    return this as unknown as BuilderClass;
  }

  setMultipleModifierExtension(modifierExtension: Extension[]): BuilderClass {
    this.domainResource.modifierExtension = modifierExtension;
    return this as unknown as BuilderClass;
  }

  entity(): DomainResource {
    return {
      ...this.domainResource,
      ...super.entity(),
    };
  }
}
