import { DaysOfWeekEnum } from '../../enums/DaysOfWeekEnum';
import { DaysOfWeekType } from '../../types/DaysOfWeekType';
import { IElement } from '../base/IElement';

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
   * @type {DaysOfWeekEnum | DaysOfWeekType[]} daysOfWeek
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
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.availableStartTime availableStartTime}
   * @type {string} availableStartTime
   */
  availableStartTime?: string;

  /**
   * @description Closing time of day (ignored if allDay = true)
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.availableEndTime availableEndTime}
   * @type {string} availableEndTime
   */
  availableEndTime?: string;

  /**
   * @description Extension of daysOfWeek element
   * @type {IElement} _daysOfWeek - Extension for daysOfWeek
   */
  _daysOfWeek?: IElement[];

  /**
   * @description Extension of allDay element
   * @type {IElement} _allDay - Extension for allDay
   */
  _allDay?: IElement;

  /**
   * @description Extension of availableStartTime element
   * @type {IElement} _availableStartTime - Extension for availableStartTime
   */
  _availableStartTime?: IElement;

  /**
   * @description Extension of availableEndTime element
   * @type {IElement} _availableEndTime - Extension for availableEndTime
   */
  _availableEndTime?: IElement;
}
