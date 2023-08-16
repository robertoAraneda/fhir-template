import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { DaysOfWeekEnum } from '../../../enums';
import { DaysOfWeekType } from '../../../types';
import BackboneElement from '../base/BackboneElement';
import { PractitionerRoleAvailableTimeBuilder } from './PractitionerRoleAvailableTimeBuilder';
import { PractitionerRoleAvailableTimeValidator } from './PractitionerRoleAvailableTimeValidator';

export default class PractitionerRoleAvailableTime extends BackboneElement implements IPractitionerRoleAvailableTime {
  // PractitionerRoleAvailableTime attributes
  daysOfWeek?: (DaysOfWeekEnum | DaysOfWeekType)[];
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;

  // Extensions
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;

  toJson(): PractitionerRoleAvailableTime {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `PractitionerRoleAvailableTime${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `PractitionerRoleAvailableTime${JSON.stringify(this.toJson())}`;
  }

  static builder(): PractitionerRoleAvailableTimeBuilder {
    return new PractitionerRoleAvailableTimeBuilder();
  }

  constructor(args: IPractitionerRoleAvailableTime) {
    super();
    PractitionerRoleAvailableTimeValidator(args);
    Object.assign(this, args);
  }
}
