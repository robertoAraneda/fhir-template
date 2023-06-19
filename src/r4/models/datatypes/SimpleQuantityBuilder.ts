import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import SimpleQuantity from './SimpleQuantity';

type ParamExtensionType = 'value' | 'code' | 'system' | 'unit';

export interface ISimpleQuantityBuilder extends IBuildable<SimpleQuantity>, IElementBuilder<SimpleQuantityBuilder> {
  setParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): SimpleQuantityBuilder;

  setCode(code: string): SimpleQuantityBuilder;

  setSystem(system: string): SimpleQuantityBuilder;

  setUnit(unit: string): SimpleQuantityBuilder;

  setValue(value: number): SimpleQuantityBuilder;
}

export class SimpleQuantityBuilder extends ElementBuilder<SimpleQuantityBuilder> implements ISimpleQuantityBuilder {
  private readonly simpleQuantity: SimpleQuantity;

  constructor() {
    super();
    this.simpleQuantity = new SimpleQuantity();
  }

  build(): SimpleQuantity {
    Object.assign(this.simpleQuantity, { ...super.entity() });
    return this.simpleQuantity.toJson();
  }

  setCode(code: string): this {
    this.simpleQuantity.code = code;
    return this;
  }

  setParamExtension(param: ParamExtensionType, extension: IElement): this {
    this.simpleQuantity[`_${param}`] = extension;
    return this;
  }

  setSystem(system: string): this {
    this.simpleQuantity.system = system;
    return this;
  }

  setUnit(unit: string): this {
    this.simpleQuantity.unit = unit;
    return this;
  }

  setValue(value: number): this {
    this.simpleQuantity.value = value;
    return this;
  }
}
