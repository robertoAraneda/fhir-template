import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { IBuildable } from '../../../globals/interfaces';
import SimpleQuantity from './SimpleQuantity';
import { ISimpleQuantity } from '../../interfaces/datatypes';

type ParamExtensionType = 'value' | 'code' | 'system' | 'unit';

export interface ISimpleQuantityBuilder extends IBuildable<SimpleQuantity>, IElementBuilder<SimpleQuantityBuilder> {
  setParamExtension<T extends ParamExtensionType>(param: T, element: IElement): this;

  setCode(code: string): this;

  setSystem(system: string): this;

  setUnit(unit: string): this;

  setValue(value: number): this;
}

export class SimpleQuantityBuilder extends ElementBuilder<SimpleQuantityBuilder> implements ISimpleQuantityBuilder {
  private readonly simpleQuantity: ISimpleQuantity;

  constructor() {
    super();
    this.simpleQuantity = {} as ISimpleQuantity;
  }

  build(): SimpleQuantity {
    Object.assign(this.simpleQuantity, { ...super.entity() });
    return new SimpleQuantity(this.simpleQuantity).toJson();
  }

  setCode(code: string): this {
    this.simpleQuantity.code = code;
    return this;
  }

  setParamExtension(param: ParamExtensionType, element: IElement): this {
    this.simpleQuantity[`_${param}`] = element;
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
