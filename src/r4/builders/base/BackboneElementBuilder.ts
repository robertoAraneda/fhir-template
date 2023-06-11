import { ElementBuilder } from './ElementBuilder';
import { IBackboneElement } from '../../interfaces/base';
import { IExtension } from '../../interfaces/datatypes';

interface IBackboneElementBuilder<BuilderClass> {
  setMultipleModifierExtension(modifierExtension: IExtension[]): BuilderClass;
  addModifierExtension(modifierExtension: IExtension): BuilderClass;
}
export class BackboneElementBuilder<BuilderClass extends BackboneElementBuilder<BuilderClass>>
  extends ElementBuilder<BuilderClass>
  implements IBackboneElementBuilder<BuilderClass>
{
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

  protected entity(): IBackboneElement {
    return {
      ...this.backboneElement,
      ...super.entity(),
    };
  }
}
