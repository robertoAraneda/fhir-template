import { IExtension, IQuantity } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

export default class Quantity extends Element implements IQuantity {
  // Quantity Properties
  code: string;
  comparator: QuantityComparatorEnum | QuantityComparatorType;
  system: string;
  unit: string;
  value: number;

  // Quantity Extensions
  _code: IElement;
  _comparator: IElement;
  _system: IElement;
  _unit: IElement;
  _value: IElement;

  static builder(): IQuantityBuilder {
    return new QuantityBuilder();
  }

  constructor(args?: IQuantity) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'code' | 'system' | 'unit' | 'value' | 'comparator';
export interface IQuantityBuilder extends IBuildable<IQuantity>, ISerializable, IElementBuilder<IQuantityBuilder> {
  setCode(value: string): QuantityBuilder;
  setSystem(value: string): QuantityBuilder;
  setUnit(value: string): QuantityBuilder;
  setValue(value: number): QuantityBuilder;
  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): QuantityBuilder;
  addParamExtension(param: ParamType, extension: IElement): QuantityBuilder;
}

class QuantityBuilder extends ElementBuilder<QuantityBuilder> implements IQuantityBuilder {
  private readonly quantity: IQuantity;

  constructor() {
    super();
    this.quantity = {} as IQuantity;
  }

  addParamExtension(param: ParamType, extension: IElement): QuantityBuilder {
    this.quantity[`_${param}`] = extension;

    return this;
  }

  build(): IQuantity {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IQuantity {
    return {
      ...this.quantity,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  setCode(value: string): QuantityBuilder {
    this.quantity.code = value;

    return this;
  }

  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): QuantityBuilder {
    this.quantity.comparator = value;
    return this;
  }

  setSystem(value: string): QuantityBuilder {
    this.quantity.system = value;
    return this;
  }

  setUnit(value: string): QuantityBuilder {
    this.quantity.unit = value;
    return this;
  }

  setValue(value: number): QuantityBuilder {
    this.quantity.value = value;
    return this;
  }
}
