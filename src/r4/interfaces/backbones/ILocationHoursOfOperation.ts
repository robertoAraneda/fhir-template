import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IBackboneElement, IElement } from '../base';

export interface ILocationHoursOfOperation extends IBackboneElement {
  daysOfWeek?: (DaysOfWeekEnum | DaysOfWeekType)[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;
  _allDay?: IElement;
  _openingTime?: IElement;
  _closingTime?: IElement;
  _daysOfWeek?: IElement[];
}
