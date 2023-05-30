import { Element } from './Element';
import { Period } from './Period';

/**
 * @description Not available during this time due to provided reason
 * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.notAvailable NotAvailable}
 */
export class NotAvailableTime extends Element {
  /**
   * @description Reason presented to the user explaining why time not available
   * @see {@link http://hl7.org/fhir/metadatatypes-definitions.html#Availability.notAvailableTime.description description}
   * @type {string}
   * @memberof NotAvailableTime
   */
  description?: string;

  /**
   * @description Service not available during this period
   * @see {@link http://hl7.org/fhir/metadatatypes-definitions.html#Availability.notAvailableTime.during during}
   * @type {Period}
   * @memberof NotAvailableTime
   */
  during?: Period;

  constructor(args?: Partial<NotAvailableTime>) {
    super();

    Object.assign(this, args);
  }
}
