import { DaysOfWeek } from '../../enums/DaysOfWeek';
import { DaysOfWeekType } from '../../types/DaysOfWeekType';
import { Element } from '../base/Element';

/**
 * @description Times the Service Site is available
 * @property {DaysOfWeek | DaysOfWeekType[]} daysOfWeek
 * @property {boolean} allDay
 * @property {string} availableStartTime
 * @property {string} availableEndTime
 * @property {Element} _availableEndTime
 * @property {Element} _availableStartTime
 * @property {Element[]} _daysOfWeek
 * @property {Element} _allDay
 * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime AvailableTime}
 */
export interface AvailableTime extends Element {
  /**
   * @description 	mon | tue | wed | thu | fri | sat | sun
   * @description Binding: {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.daysOfWeek Days Of Week} (Required)
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.daysOfWeek DaysOfWeek}
   * @type {DaysOfWeek | DaysOfWeekType[]} daysOfWeek
   */
  daysOfWeek?: DaysOfWeek[] | DaysOfWeekType[];

  /**
   * @description Always available? e.g. 24 hour service
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.allDay allDay}
   * @type {boolean} allDay
   * @memberof AvailableTime
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

  _daysOfWeek?: Element[];
  _allDay?: Element;
  _availableStartTime?: Element;
  _availableEndTime?: Element;
}
