import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IBackboneElement } from '../base';

export interface ILocationHoursOfOperation extends IBackboneElement {
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;
}
