import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IQuantity } from '../../interfaces/datatypes';
import { Quantity } from './index';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IBuildable } from '../../../globals/interfaces';

type ParamExtensionType = 'code' | 'system' | 'unit' | 'value' | 'comparator';
interface IQuantityBuilder extends IBuildable<Quantity>, IElementBuilder<QuantityBuilder> {
  setCode(value: string): this;
  setSystem(value: string): this;
  setUnit(value: string): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): this;
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IQuantity): this;
}

export default class QuantityBuilder extends ElementBuilder<QuantityBuilder> implements IQuantityBuilder {
  private readonly quantity: IQuantity;

  constructor() {
    super();
    this.quantity = {} as IQuantity;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IQuantity): this {
    this.quantity[`_${param}`] = extension;

    return this;
  }

  build(): Quantity {
    Object.assign(this.quantity, { ...super.entity() });
    return new Quantity(this.quantity).toJson();
  }

  setCode(value: string): this {
    this.quantity.code = value;

    return this;
  }

  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): this {
    this.quantity.comparator = value;
    return this;
  }

  setSystem(value: string): this {
    this.quantity.system = value;
    return this;
  }

  setUnit(value: string): this {
    this.quantity.unit = value;
    return this;
  }

  setValue(value: number): this {
    this.quantity.value = value;
    return this;
  }
}
