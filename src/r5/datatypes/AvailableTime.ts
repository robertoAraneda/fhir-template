import { BackboneElement } from './BackboneElement';
import { DaysOfWeek } from '../enums/DaysOfWeek';
import { DaysOfWeekType } from '../types/DaysOfWeekType';
import { Element } from './Element';

/**
 * @description Times the Service Site is available
 * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime AvailableTime}
 */
export class AvailableTime extends Element {
  /**
   * @description 	mon | tue | wed | thu | fri | sat | sun
   * @description Binding: {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.daysOfWeek Days Of Week} (Required)
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.daysOfWeek DaysOfWeek}
   * @type {DaysOfWeek | DaysOfWeekType[]}
   * @memberof AvailableTime
   */
  daysOfWeek?: DaysOfWeek[] | DaysOfWeekType[];

  /**
   * @description Always available? e.g. 24 hour service
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.allDay allDay}
   * @type {boolean}
   * @memberof AvailableTime
   */
  allDay?: boolean;

  /**
   * @description Opening time of day (ignored if allDay = true)
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.availableStartTime availableStartTime}
   * @type {string}
   * @memberof AvailableTime
   */
  availableStartTime?: string;

  /**
   * @description Closing time of day (ignored if allDay = true)
   * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.availableTime.availableEndTime availableEndTime}
   * @type {string}
   * @memberof AvailableTime
   */
  availableEndTime?: string;

  constructor(args?: Partial<AvailableTime>) {
    super();
    Object.assign(this, args);
  }
}
