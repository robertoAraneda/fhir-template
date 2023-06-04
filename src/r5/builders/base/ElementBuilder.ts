import { Extension } from '../../interfaces/datatypes/Extension';
import { BaseBuilder } from './BaseBuilder';
import { Element } from '../../interfaces/base/Element';

export class ElementBuilder<BuilderClass extends ElementBuilder<BuilderClass>> extends BaseBuilder<BuilderClass> {
  private readonly element: Element;

  constructor() {
    super();
    this.element = {} as Element;
  }

  setId(id: string): BuilderClass {
    this.element.id = id;
    return this as unknown as BuilderClass;
  }

  setMultipleExtension(extension: Extension[]): BuilderClass {
    this.element.extension = extension;
    return this as unknown as BuilderClass;
  }

  addExtension(extension: Extension): BuilderClass {
    this.element.extension = this.element.extension || [];
    this.element.extension.push(extension);
    return this as unknown as BuilderClass;
  }

  entity(): Element {
    return {
      ...this.element,
      ...super.entity(),
    };
  }
}
