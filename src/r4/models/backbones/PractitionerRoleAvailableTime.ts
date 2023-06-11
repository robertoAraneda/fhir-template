import { IPractitionerRoleAvailableTime } from '../../interfaces/backbones';
import { IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class PractitionerRoleAvailableTime implements IPractitionerRoleAvailableTime {
  // Element attributes
  id?: string;
  extension?: IExtension[];

  // BackboneElement attributes
  modifierExtension?: IExtension[];

  // PractitionerRoleAvailableTime attributes
  daysOfWeek?: string[];
  allDay?: boolean;
  availableStartTime?: string;
  availableEndTime?: string;

  // Extensions
  _daysOfWeek?: IElement[];
  _allDay?: IElement;
  _availableStartTime?: IElement;
  _availableEndTime?: IElement;

  constructor(args?: PractitionerRoleAvailableTime) {
    Object.assign(this, args);
  }
}
