import { ILocationHoursOfOperation } from '../../interfaces/backbones';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';

export default class LocationHoursOfOperation implements ILocationHoursOfOperation {
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;

  constructor(args?: ILocationHoursOfOperation) {
    if (args) {
      this.daysOfWeek = args.daysOfWeek;
      this.allDay = args.allDay;
      this.openingTime = args.openingTime;
      this.closingTime = args.closingTime;
    }
  }
}
