import { Element } from '../base/Element';
import { Period } from './Period';

/**
 * @description Not available during this time due to provided reason
 * @property {string} description - Reason presented to the user explaining why time not available
 * @property {Period} during - Service not available during this period
 * @property {string} _description - Extension for description
 * @see {@link http://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.notAvailable NotAvailable}
 */
export interface NotAvailableTime extends Element {
  /**
   * @description Reason presented to the user explaining why time not available
   * @see {@link http://hl7.org/fhir/metadatatypes-definitions.html#Availability.notAvailableTime.description description}
   * @type {string} description
   */
  description?: string;

  /**
   * @description Extension of description
   * @type {Element} _description
   */
  _description?: Element;

  /**
   * @description Service not available during this period
   * @see {@link http://hl7.org/fhir/metadatatypes-definitions.html#Availability.notAvailableTime.during during}
   * @type {Period} during
   */
  during?: Period;
}
