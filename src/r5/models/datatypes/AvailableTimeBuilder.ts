import { IBuildable } from '../../../globals/interfaces';
import { ElementBuilder, IElementBuilder } from '../base/ElementBuilder';
import AvailableTime from './AvailableTime';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IAvailableTime } from '../../interfaces/datatypes';

export interface IAvailableTimeBuilder extends IBuildable<AvailableTime>, IElementBuilder<AvailableTimeBuilder> {
  addDaysOfWeek(value: DaysOfWeekEnum | DaysOfWeekType): this;
  setMultipleDaysOfWeek(value: (DaysOfWeekEnum | DaysOfWeekType)[]): this;
  setAllDay(value: boolean): this;
  setAvailableStartTime(value: string): this;
  setAvailableEndTime(value: string): this;
}

export default class AvailableTimeBuilder
  extends ElementBuilder<AvailableTimeBuilder>
  implements IAvailableTimeBuilder
{
  private readonly availableTime: IAvailableTime;

  constructor() {
    super();
    this.availableTime = {} as IAvailableTime;
  }

  addDaysOfWeek(value: DaysOfWeekEnum | DaysOfWeekType): this {
    this.availableTime.daysOfWeek = this.availableTime.daysOfWeek || [];
    this.availableTime.daysOfWeek.push(value);
    return this;
  }

  setMultipleDaysOfWeek(value: (DaysOfWeekEnum | DaysOfWeekType)[]): this {
    this.availableTime.daysOfWeek = value;
    return this;
  }

  setAllDay(value: boolean): this {
    this.availableTime.allDay = value;
    return this;
  }

  setAvailableStartTime(value: string): this {
    this.availableTime.availableStartTime = value;
    return this;
  }

  setAvailableEndTime(value: string): this {
    this.availableTime.availableEndTime = value;
    return this;
  }

  build(): AvailableTime {
    Object.assign(this.availableTime, { ...super.entity() });
    return new AvailableTime(this.availableTime).toJson();
  }
}
