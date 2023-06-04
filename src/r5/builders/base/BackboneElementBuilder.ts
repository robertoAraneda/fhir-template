import { ElementBuilder } from './ElementBuilder';
import { BackboneElement } from '../../interfaces/base/BackboneElement';
import { Extension } from '../../interfaces/datatypes/Extension';

export class BackboneElementBuilder<
  BuilderClass extends BackboneElementBuilder<BuilderClass>,
> extends ElementBuilder<BuilderClass> {
  private readonly backboneElement: BackboneElement;

  constructor() {
    super();
    this.backboneElement = {} as BackboneElement;
  }

  setMultipleModifierExtension(modifierExtension: Extension[]): BuilderClass {
    this.backboneElement.modifierExtension = modifierExtension;
    return this as unknown as BuilderClass;
  }

  addModifierExtension(modifierExtension: Extension): BuilderClass {
    this.backboneElement.modifierExtension = this.backboneElement.modifierExtension || [];
    this.backboneElement.modifierExtension.push(modifierExtension);
    return this as unknown as BuilderClass;
  }

  entity(): BackboneElement {
    return {
      ...this.backboneElement,
      ...super.entity(),
    };
  }
}
