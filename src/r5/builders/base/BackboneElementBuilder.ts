import { ElementBuilder } from './ElementBuilder';
import { IBackboneElement } from '../../interfaces/base';
import { IExtension } from '../../interfaces/datatypes';

export class BackboneElementBuilder<
  BuilderClass extends BackboneElementBuilder<BuilderClass>,
> extends ElementBuilder<BuilderClass> {
  private readonly backboneElement: IBackboneElement;

  constructor() {
    super();
    this.backboneElement = {} as IBackboneElement;
  }

  setMultipleModifierExtension(modifierExtension: IExtension[]): BuilderClass {
    this.backboneElement.modifierExtension = modifierExtension;
    return this as unknown as BuilderClass;
  }

  addModifierExtension(modifierExtension: IExtension): BuilderClass {
    this.backboneElement.modifierExtension = this.backboneElement.modifierExtension || [];
    this.backboneElement.modifierExtension.push(modifierExtension);
    return this as unknown as BuilderClass;
  }

  entity(): IBackboneElement {
    return {
      ...this.backboneElement,
      ...super.entity(),
    };
  }
}
