import { ElementBuilder } from '../base/ElementBuilder';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ISimpleQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { SimpleQuantity } from '../../models/datatypes';

type ParamType = 'value' | 'code' | 'system' | 'unit';

interface ISimpleQuantityBuilder extends IBuildable<ISimpleQuantity>, ISerializable {
  setParamExtension(param: ParamType, extension: IElement): this;
  setCode(code: string): this;
  setSystem(system: string): this;
  setUnit(unit: string): this;
  setValue(value: number): this;
}
export default class SimpleQuantityBuilder
  extends ElementBuilder<SimpleQuantityBuilder>
  implements ISimpleQuantityBuilder
{
  private readonly simpleQuantity: ISimpleQuantity;
  constructor() {
    super();
    this.simpleQuantity = new SimpleQuantity();
  }

  build(): ISimpleQuantity {
    return JSON.parse(this.serialize());
  }

  raw(): ISimpleQuantity {
    return {
      ...this.simpleQuantity,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw());
  }

  setCode(code: string): this {
    this.simpleQuantity.code = code;
    return this;
  }

  setParamExtension(param: ParamType, extension: IElement): this {
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
