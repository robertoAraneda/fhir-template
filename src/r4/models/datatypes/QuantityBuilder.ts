import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IQuantity } from '../../interfaces/datatypes';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IElement } from '../../interfaces/base';

type ParamType = 'code' | 'system' | 'unit' | 'value' | 'comparator';

export interface IQuantityBuilder extends IBuildable<IQuantity>, ISerializable, IElementBuilder<IQuantityBuilder> {
  setCode(value: string): QuantityBuilder;

  setSystem(value: string): QuantityBuilder;

  setUnit(value: string): QuantityBuilder;

  setValue(value: number): QuantityBuilder;

  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): QuantityBuilder;

  addParamExtension(param: ParamType, extension: IElement): QuantityBuilder;
}

export class QuantityBuilder extends ElementBuilder<QuantityBuilder> implements IQuantityBuilder {
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
