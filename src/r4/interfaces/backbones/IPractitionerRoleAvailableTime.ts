import { IBackboneElement, IElement } from '../base';

export interface IPractitionerRoleAvailableTime extends IBackboneElement {
  daysOfWeek?: string[];
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;
}
