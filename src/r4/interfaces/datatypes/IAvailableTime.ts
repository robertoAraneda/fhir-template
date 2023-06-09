import { DaysOfWeekEnum } from '../../enums';
import { DaysOfWeekType } from '../../types';
import { IElement } from '../base';

/**
 * @description Times the Service Site is available
 * @property {DaysOfWeekEnum | DaysOfWeekType[]} daysOfWeek - mon | tue | wed | thu | fri | sat | sun (Required)
 * @property {boolean} allDay - Always available? e.g. 24-hour service
 * @property {string} availableStartTime - Opening time of day (ignored if allDay = true)
 * @property {string} availableEndTime - Closing time of day (ignored if allDay = true)
 * @property {IElement} _availableEndTime - Extension for availableEndTime
 * @property {IElement} _availableStartTime - Extension for availableStartTime
 * @property {IElement[]} _daysOfWeek - Extension for daysOfWeek
 * @property {IElement} _allDay - Extension for allDay
 * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime AvailableTime}
 * @since 2023-06-01
 * @author Roberto Araneda
 */
export interface IAvailableTime extends IElement {
  /**
   * @description 	mon | tue | wed | thu | fri | sat | sun
   * @description Binding: {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.daysOfWeek Days Of Week} (Required)
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.daysOfWeek DaysOfWeek}
   */
  daysOfWeek?: DaysOfWeekEnum[] | DaysOfWeekType[];

  /**
   * @description Always available? e.g. 24 hour service
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.allDay allDay}
   * @type {boolean} allDay
   */
  allDay?: boolean;

  /**
   * @description Opening time of day (ignored if allDay = true)
   * @description A time during the day, in the format hh:mm:ss.
   * @description The time "24:00" SHALL NOT be used.
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.availableStartTime availableStartTime}
   * @example 09:00:00
   */
  availableStartTime?: string;

  /**
   * @description Closing time of day (ignored if allDay = true)
   * @description A time during the day, in the format hh:mm:ss.
   * @description The time "24:00" SHALL NOT be used.
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.availableEndTime availableEndTime}
   * @example 09:00:00
   */
  availableEndTime?: string;

  /**
   * @description Extension of daysOfWeek element
   */
  _daysOfWeek?: IElement[];

  /**
   * @description Extension of allDay element
   */
  _allDay?: IElement;

  /**
   * @description Extension of availableStartTime element
   */
  _availableStartTime?: IElement;

  /**
   * @description Extension of availableEndTime element
   */
  _availableEndTime?: IElement;
}
