import { ElementBuilder } from '../base/ElementBuilder';
import { IQuantity } from '../../interfaces/datatypes';
import { Quantity } from '../../models/datatypes/Quantity';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';

type QuantityParam = 'code' | 'system' | 'unit' | 'value' | 'comparator';
interface IQuantityBuilder extends IBuildable<IQuantity>, ISerializable {
  fromJSON(json: IQuantity): Pick<IQuantityBuilder, 'build' | 'serialize'>;
  setCode(value: string): QuantityBuilder;
  setSystem(value: string): QuantityBuilder;
  setUnit(value: string): QuantityBuilder;
  setValue(value: number): QuantityBuilder;
  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): QuantityBuilder;
  addQuantityParamExtension(param: QuantityParam, extension: IQuantity): QuantityBuilder;
}

export class QuantityBuilder extends ElementBuilder<QuantityBuilder> implements IQuantityBuilder {
  private quantity: IQuantity;

  constructor() {
    super();
    this.quantity = new Quantity();
  }

  addQuantityParamExtension(param: QuantityParam, extension: IQuantity): QuantityBuilder {
    this.quantity[`_${param}`] = extension;

    return this;
  }

  build(): IQuantity {
    return JSON.parse(this.serialize());
  }

  fromJSON(json: IQuantity): Pick<IQuantityBuilder, 'build' | 'serialize'> {
    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  raw(): IQuantity {
    return {
      ...this.quantity,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
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
