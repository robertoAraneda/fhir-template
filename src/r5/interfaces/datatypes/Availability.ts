import { Element } from '../base/Element';
import { AvailableTime } from './AvailableTime';
import { NotAvailableTime } from './NotAvailableTime';

/**
 * @description Availability data for an {item}
 * @property {AvailableTime[]} availableTime
 * @property {NotAvailableTime[]} notAvailableTime
 * @see {@link http://hl7.org/fhir/R5/practitionerrole-definitions.html#PractitionerRole.availability availability}
 */
export interface Availability extends Element {
  /**
   * @description Times the {item} is available
   * @see {@link http://hl7.org/fhir/R5/metadatatypes-definitions.html#Availability.availableTime availableTime}
   * @type {AvailableTime[]} availableTime
   */
  availableTime?: AvailableTime[];

  /**
   * @description Not available during this time due to provided reason
   * @see {@link http://hl7.org/fhir/R5/metadatatypes-definitions.html#Availability.notAvailableTime notAvailableTime}
   * @type {NotAvailableTime[]} notAvailableTime
   */
  notAvailableTime?: NotAvailableTime[];
}
