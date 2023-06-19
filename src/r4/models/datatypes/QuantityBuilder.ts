import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IQuantity } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IElement } from '../../interfaces/base';
import Quantity from './Quantity';

type ParamExtensionType = 'code' | 'system' | 'unit' | 'value' | 'comparator';

export interface IQuantityBuilder extends IBuildable<Quantity>, IElementBuilder<QuantityBuilder> {
  setCode(value: string): QuantityBuilder;

  setSystem(value: string): QuantityBuilder;

  setUnit(value: string): QuantityBuilder;

  setValue(value: number): QuantityBuilder;

  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): QuantityBuilder;

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): QuantityBuilder;
}

export class QuantityBuilder extends ElementBuilder<QuantityBuilder> implements IQuantityBuilder {
  private readonly quantity: Quantity;

  constructor() {
    super();
    this.quantity = new Quantity();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): QuantityBuilder {
    this.quantity[`_${param}`] = extension;

    return this;
  }

  build(): Quantity {
    Object.assign(this.quantity, { ...super.entity() });
    return this.quantity.toJson();
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
