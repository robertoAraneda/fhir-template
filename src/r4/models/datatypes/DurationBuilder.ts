import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IBuildable } from '../../../globals/interfaces';
import Duration from './Duration';
import { IDuration } from '../../interfaces/datatypes';

type ParamExtensionType = 'value' | 'comparator' | 'unit' | 'system' | 'code';

export interface IDurationBuilder extends IBuildable<Duration>, IElementBuilder<DurationBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): DurationBuilder;

  setValue(value: number): DurationBuilder;

  setComparator(comparator: QuantityComparatorEnum | QuantityComparatorType): DurationBuilder;

  setUnit(unit: string): DurationBuilder;

  setSystem(system: string): DurationBuilder;

  setCode(code: string): DurationBuilder;
}

export class DurationBuilder extends ElementBuilder<DurationBuilder> implements IDurationBuilder {
  private readonly duration: IDuration;

  constructor() {
    super();

    this.duration = {} as IDuration;
  }

  /**
   * @description Add a param extension to the duration
   * @param param
   * @param extension
   * @returns DurationBuilder The builder
   */
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): DurationBuilder {
    this.duration[`_${param}`] = extension;

    return this;
  }

  /**
   * @description Set the value of the duration
   * @param value
   * @returns DurationBuilder The builder
   */
  setValue(value: number): DurationBuilder {
    this.duration.value = value;

    return this;
  }

  /**
   * @description Set the comparator of the duration
   * @param comparator
   * @returns DurationBuilder The builder
   */
  setComparator(comparator: QuantityComparatorEnum | QuantityComparatorType): DurationBuilder {
    this.duration.comparator = comparator;

    return this;
  }

  /**
   * @description Set the unit of the duration
   * @param unit
   * @returns DurationBuilder The builder
   */
  setUnit(unit: string): DurationBuilder {
    this.duration.unit = unit;

    return this;
  }

  /**
   * @description Set the system of the duration
   * @param system
   * @returns DurationBuilder The builder
   */
  setSystem(system: string): DurationBuilder {
    this.duration.system = system;

    return this;
  }

  /**
   * @description Set the code of the duration
   * @param code
   * @returns DurationBuilder The builder
   */
  setCode(code: string): DurationBuilder {
    this.duration.code = code;

    return this;
  }

  build(): Duration {
    Object.assign(this.duration, { ...super.entity() });
    return new Duration(this.duration).toJson();
  }
}
