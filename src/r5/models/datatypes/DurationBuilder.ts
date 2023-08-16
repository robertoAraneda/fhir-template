import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import { Duration } from './index';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IDuration } from '../../interfaces/datatypes';

type ParamExtensionType = 'value' | 'comparator' | 'unit' | 'system' | 'code';

interface IDurationBuilder extends IBuildable<Duration>, IElementBuilder<DurationBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  setValue(value: number): this;
  setComparator(value: QuantityComparatorEnum | QuantityComparatorType): this;
  setUnit(value: string): this;
  setSystem(value: string): this;
  setCode(value: string): this;
}
export default class DurationBuilder extends ElementBuilder<DurationBuilder> implements IDurationBuilder {
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
   * @example ```typescript
   * const duration = new DurationBuilder()
   * .addDurationParamExtension('value', {
   *      "extension": [
   *          {
   *              url: "http://example.com",
   *              valueString: "example"
   *          }
   *        ]
   *      })
   *      .build();
   *  JSON generated:
   *  {
   *      "_value": {
   *          "extension": [
   *              {
   *                  url: "http://example.com",
   *                  valueString: "example"
   *              }
   *           ]
   *      }
   *  }
   */
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.duration[`_${param}`] = extension;

    return this;
  }

  /**
   * @description Set the value of the duration
   * @param value
   * @returns DurationBuilder The builder
   */
  setValue(value: number): this {
    this.duration.value = value;

    return this;
  }

  /**
   * @description Set the comparator of the duration
   * @param comparator
   * @returns DurationBuilder The builder
   */
  setComparator(comparator: QuantityComparatorEnum | QuantityComparatorType): this {
    this.duration.comparator = comparator;

    return this;
  }

  /**
   * @description Set the unit of the duration
   * @param unit
   * @returns DurationBuilder The builder
   */
  setUnit(unit: string): this {
    this.duration.unit = unit;

    return this;
  }

  /**
   * @description Set the system of the duration
   * @param system
   * @returns DurationBuilder The builder
   */
  setSystem(system: string): this {
    this.duration.system = system;

    return this;
  }

  /**
   * @description Set the code of the duration
   * @param code
   * @returns DurationBuilder The builder
   */
  setCode(code: string): this {
    this.duration.code = code;

    return this;
  }

  build(): Duration {
    Object.assign(this.duration, { ...super.entity() });
    return new Duration(this.duration).toJson();
  }
}
