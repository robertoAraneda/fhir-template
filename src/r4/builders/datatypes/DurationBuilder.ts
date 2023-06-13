import { ElementBuilder } from '../base/ElementBuilder';
import { IDuration } from '../../interfaces/datatypes';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { Duration } from '../../models/datatypes';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';

type ParamType = 'value' | 'comparator' | 'unit' | 'system' | 'code';
interface IDurationBuilder extends IBuildable<IDuration>, ISerializable {
  addParamExtension(param: ParamType, extension: IElement): IDurationBuilder;
  setValue(value: number): IDurationBuilder;
  setComparator(comparator: QuantityComparatorEnum | QuantityComparatorType): IDurationBuilder;
  setUnit(unit: string): IDurationBuilder;
  setSystem(system: string): IDurationBuilder;
  setCode(code: string): IDurationBuilder;
}
export default class DurationBuilder extends ElementBuilder<DurationBuilder> implements IDurationBuilder {
  private readonly duration: IDuration;

  constructor() {
    super();

    this.duration = new Duration();
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
  addParamExtension(param: ParamType, extension: IElement): DurationBuilder {
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

  build(): IDuration {
    return JSON.parse(this.serialize());
  }

  raw(): IDuration {
    return {
      ...this.duration,
      ...super.entity(),
    };
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }
}
