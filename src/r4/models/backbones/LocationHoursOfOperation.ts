import { ILocationHoursOfOperation } from '../../interfaces/backbones';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import BackboneElement from '../base/BackboneElement';
import { LocationHoursOfOperationBuilder } from './LocationHoursOfOperationBuilder';
import { IElement } from '../../interfaces/base';
import { locationHoursOfOperationFields, LocationHoursOfOperationValidator } from './LocationHoursOfOperationValidator';

export default class LocationHoursOfOperation extends BackboneElement implements ILocationHoursOfOperation {
  daysOfWeek?: (DaysOfWeekEnum | DaysOfWeekType)[];
  allDay?: boolean;
  openingTime?: string;
  closingTime?: string;
  _allDay?: IElement;
  _openingTime?: IElement;
  _closingTime?: IElement;
  _daysOfWeek?: IElement[];

  toJson(): LocationHoursOfOperation {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `LocationHoursOfOperation${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `LocationHoursOfOperation${JSON.stringify(this.toJson())}`;
  }

  static builder(): LocationHoursOfOperationBuilder {
    return new LocationHoursOfOperationBuilder();
  }

  constructor(args: ILocationHoursOfOperation) {
    super();
    LocationHoursOfOperationValidator(args);
    Object.assign(this, args);
  }
}
