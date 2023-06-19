import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { IElement } from '../../interfaces/base';
import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import BackboneElement from '../base/BackboneElement';
import {
  IPractitionerRoleAvailableTimeBuilder,
  PractitionerRoleAvailableTimeBuilder,
} from './PractitionerRoleAvailableTimeBuilder';

export default class PractitionerRoleAvailableTime extends BackboneElement implements IPractitionerRoleAvailableTime {
  // PractitionerRoleAvailableTime attributes
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;

  // Extensions
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;

  static builder(): IPractitionerRoleAvailableTimeBuilder {
    return new PractitionerRoleAvailableTimeBuilder();
  }

  constructor(args?: PractitionerRoleAvailableTime) {
    super();
    Object.assign(this, args);
  }
}
