import { IExtension, IPeriod } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../../builders/base/ElementBuilder';
import Element from './Element';

/**
 * @description Time range defined by start and end date/time.
 * @implements {IPeriod}
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {string} start - Starting time with inclusive boundary
 * @property {string} end - End time with inclusive boundary, if not ongoing
 * @property {IElement} _start - Extension of start
 * @property {IElement} _end - Extension of end
 * @see {@link https://www.hl7.org/fhir/datatypes.html#Period Period}
 * @author Roberto Araneda
 */
export default class Period extends Element implements IPeriod {
  /**
   * @description Starting time with inclusive boundary
   * @description A date, date-time or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
   * @description The time "24:00" is not allowed.
   * @example 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
   */
  start?: string;

  /**
   * @description End time with inclusive boundary, if not ongoing
   * @description A date, date-time or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
   * @example 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
   */
  end?: string;

  /**
   * @description Extension of start
   */
  _start?: IElement;

  /**
   * @description Extension of end
   */
  _end?: IElement;

  static builder(): IPeriodBuilder {
    return new PeriodBuilder();
  }

  constructor(args?: IPeriod) {
    super();
    Object.assign(this, args);
  }
}

export interface IPeriodBuilder extends IBuildable<IPeriod>, ISerializable, IElementBuilder<IPeriodBuilder> {
  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder;
  setStart(value: string): PeriodBuilder;
  setEnd(value: string): PeriodBuilder;
}
class PeriodBuilder extends ElementBuilder<PeriodBuilder> implements IPeriodBuilder {
  private readonly period: IPeriod;

  constructor() {
    super();
    this.period = {} as IPeriod;
  }

  addParamExtension(param: 'start' | 'end', extension: IElement): PeriodBuilder {
    this.period[`_${param}`] = extension;

    return this;
  }
  setStart(value: string): PeriodBuilder {
    this.period.start = value;

    return this;
  }

  setEnd(value: string): PeriodBuilder {
    this.period.end = value;

    return this;
  }

  buildAsString(): string {
    return JSON.stringify(this.compileAsDefault(), null, 2);
  }

  build(): IPeriod {
    return JSON.parse(this.buildAsString());
  }

  compileAsDefault(): IPeriod {
    return {
      ...this.period,
      ...super.entity(),
    };
  }
}
