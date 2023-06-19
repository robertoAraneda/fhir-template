import { IDuration, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

/**
 * @description A length of time.
 * @description fhirVersion : 5.0.0
 * @property {id} id - Unique id for inter-element referencing.
 * @property {IExtension[]} extension - Additional content defined by implementations.
 * @property {number} value - The value of the measured amount. The value includes an implicit precision in the presentation of the value.
 * @property {QuantityComparatorEnum | QuantityComparatorType} comparator - How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
 * @property {string} unit - A human-readable form of the unit.
 * @property {string} system - The identification of the system that provides the coded form of the unit.
 * @property {string} code - A computer processable form of the unit in some unit representation system.
 * @property {IElement} _value - Extensions for value
 * @property {IElement} _comparator - Extensions for comparator
 * @property {IElement} _unit - Extensions for unit
 * @property {IElement} _system - Extensions for system
 * @property {IElement} _code - Extensions for code
 * @see https://www.hl7.org/fhir/datatypes.html#Duration Duration
 * @author Roberto Araneda
 *
 */
export default class Duration extends Element implements IDuration {
  /**
   * @description The value of the measured amount. The value includes an implicit precision in the presentation of the value.
   */
  value?: number;

  /**
   * @description How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
   */
  comparator?: QuantityComparatorEnum | QuantityComparatorType;

  /**
   * @description A human-readable form of the unit.
   */
  unit?: string;

  /**
   * @description The identification of the system that provides the coded form of the unit.
   */
  system?: string;

  /**
   * @description A computer processable form of the unit in some unit representation system.
   */
  code?: string;

  // Extensions

  /**
   * @description Extensions for value
   */
  _value?: IElement;

  /**
   * @description Extensions for comparator
   */
  _comparator?: IElement;

  /**
   * @description Extensions for unit
   */
  _unit?: IElement;

  /**
   * @description Extensions for system
   */
  _system?: IElement;

  /**
   * @description Extensions for code
   */
  _code?: IElement;

  static builder(): IDurationBuilder {
    return new DurationBuilder();
  }

  constructor(args?: IDuration) {
    super();
    Object.assign(this, args);
  }
}

type ParamType = 'value' | 'comparator' | 'unit' | 'system' | 'code';
export interface IDurationBuilder extends IBuildable<IDuration>, ISerializable, IElementBuilder<IDurationBuilder> {
  addParamExtension(param: ParamType, extension: IElement): IDurationBuilder;
  setValue(value: number): IDurationBuilder;
  setComparator(comparator: QuantityComparatorEnum | QuantityComparatorType): IDurationBuilder;
  setUnit(unit: string): IDurationBuilder;
  setSystem(system: string): IDurationBuilder;
  setCode(code: string): IDurationBuilder;
}
class DurationBuilder extends ElementBuilder<DurationBuilder> implements IDurationBuilder {
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
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IDuration {
    return {
      ...this.duration,
      ...super.entity(),
    };
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }
}
