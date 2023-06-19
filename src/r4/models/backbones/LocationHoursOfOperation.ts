import { ILocationHoursOfOperation } from '../../interfaces/backbones';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import BackboneElement from '../base/BackboneElement';
import { ILocationHoursOfOperationBuilder, LocationHoursOfOperationBuilder } from './LocationHoursOfOperationBuilder';

export default class LocationHoursOfOperation extends BackboneElement implements ILocationHoursOfOperation {
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;

  static builder(): ILocationHoursOfOperationBuilder {
    return new LocationHoursOfOperationBuilder();
  }

  constructor(args?: ILocationHoursOfOperation) {
    super();
    Object.assign(this, args);
  }
}
