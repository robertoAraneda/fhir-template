import { IExtension } from '../../interfaces/datatypes';
import { BaseBuilder } from './BaseBuilder';
import { IElement } from '../../interfaces/base';

export class ElementBuilder<BuilderClass extends ElementBuilder<BuilderClass>> extends BaseBuilder<BuilderClass> {
  private readonly element: IElement;

  constructor() {
    super();
    this.element = {} as IElement;
  }

  setId(id: string): BuilderClass {
    this.element.id = id;
    return this as unknown as BuilderClass;
  }

  setMultipleExtension(extension: IExtension[]): BuilderClass {
    this.element.extension = extension;
    return this as unknown as BuilderClass;
  }

  addExtension(extension: IExtension): BuilderClass {
    this.element.extension = this.element.extension || [];
    this.element.extension.push(extension);
    return this as unknown as BuilderClass;
  }

  entity(): IElement {
    return {
      ...this.element,
      ...super.entity(),
    };
  }
}
