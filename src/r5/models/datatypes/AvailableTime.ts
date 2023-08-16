import { IAvailableTime } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import AvailableTimeBuilder from './AvailableTimeBuilder';
import { AvailableTimeValidator } from './AvailableTimeValidator';
import Element from '../base/Element';

export default class AvailableTime extends Element implements IAvailableTime {
  _allDay: IElement;
  _availableEndTime: IElement;
  _availableStartTime: IElement;
  _daysOfWeek: IElement[];
  allDay: boolean;
  availableEndTime: string;
  availableStartTime: string;
  daysOfWeek: (DaysOfWeekEnum | DaysOfWeekType)[];

  static builder(): AvailableTimeBuilder {
    return new AvailableTimeBuilder();
  }

  toJson(): AvailableTime {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `AvailableTime${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `AvailableTime${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IAvailableTime) {
    super();
    AvailableTimeValidator(args);
    Object.assign(this, args);
  }
}
