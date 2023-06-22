import { IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { BaseBuilder } from './BaseBuilder';

export interface IElementBuilder<BuilderClass> {
  setId(id: string): BuilderClass;
  addExtension(extension: IExtension): BuilderClass;
  setMultipleExtension(extension: IExtension[]): BuilderClass;
}
export class ElementBuilder<BuilderClass> extends BaseBuilder<BuilderClass> implements IElementBuilder<BuilderClass> {
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
    };
  }
}
