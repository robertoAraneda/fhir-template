import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { SimpleQuantity } from './index';
import { IElementBuilder } from '../../../r4/models/base/ElementBuilder';

type ParamExtensionType = 'value' | 'code' | 'system' | 'unit';

interface ISimpleQuantityBuilder extends IBuildable<SimpleQuantity>, IElementBuilder<SimpleQuantityBuilder> {
  setParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  setCode(code: string): this;
  setSystem(system: string): this;
  setUnit(unit: string): this;
  setValue(value: number): this;
}
export default class SimpleQuantityBuilder
  extends ElementBuilder<SimpleQuantityBuilder>
  implements ISimpleQuantityBuilder
{
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
