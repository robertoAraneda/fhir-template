import { IDuration, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { QuantityComparatorEnum } from '../../enums';
import { QuantityComparatorType } from '../../types';
import Element from '../base/Element';
import { DurationBuilder } from './DurationBuilder';

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

  toJson(): Duration {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Duration${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Duration${JSON.stringify(this.toJson())}`;
  }

  static builder(): DurationBuilder {
    return new DurationBuilder();
  }

  constructor(args?: IDuration) {
    super();
    Object.assign(this, args);
  }
}
