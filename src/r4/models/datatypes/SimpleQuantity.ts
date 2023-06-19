import { IExtension, ISimpleQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

export default class SimpleQuantity extends Element implements ISimpleQuantity {
  // SimpleQuantity attributes
  value?: number;
  unit?: string;
  system?: string;
  code?: string;

  // Extension attributes
  _code?: IElement;
  _value?: IElement;
  _unit?: IElement;
  _system?: IElement;

  static builder(): ISimpleQuantityBuilder {
    return new SimpleQuantityBuilder();
  }
  constructor(args?: ISimpleQuantity) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'value' | 'code' | 'system' | 'unit';

export interface ISimpleQuantityBuilder
  extends IBuildable<ISimpleQuantity>,
    ISerializable,
    IElementBuilder<ISimpleQuantityBuilder> {
  setParamExtension(param: ParamType, extension: IElement): this;
  setCode(code: string): this;
  setSystem(system: string): this;
  setUnit(unit: string): this;
  setValue(value: number): this;
}
class SimpleQuantityBuilder extends ElementBuilder<SimpleQuantityBuilder> implements ISimpleQuantityBuilder {
  private readonly simpleQuantity: ISimpleQuantity;
  constructor() {
    super();
    this.simpleQuantity = {} as ISimpleQuantity;
  }

  build(): ISimpleQuantity {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): ISimpleQuantity {
    return {
      ...this.simpleQuantity,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault());
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
