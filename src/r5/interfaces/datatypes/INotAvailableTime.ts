import { IElement } from '../base/IElement';
import { IPeriod } from './IPeriod';

/**
 * @description Not available during this time due to provided reason
 * @property {string} description - Reason presented to the user explaining why time not available
 * @property {IPeriod} during - Service not available during this period
 * @property {string} _description - Extension for description
 * @see https://hl7.org/fhir/practitionerrole-definitions.html#PractitionerRole.notAvailable NotAvailable
 * @since 2023-06-01
 * @interface INotAvailableTime
 * @extends {IElement} IElement
 * @author Roberto Araneda
 */
export interface INotAvailableTime extends IElement {
  /**
   * @description Reason presented to the user explaining why time not available
   * @see {@link http://hl7.org/fhir/metadatatypes-definitions.html#Availability.notAvailableTime.description description}
   * @type {string} description
   */
  description?: string;

  /**
   * @description Extension of description
   * @type {IElement} _description
   */
  _description?: IElement;

  /**
   * @description Service not available during this period
   * @see {@link http://hl7.org/fhir/metadatatypes-definitions.html#Availability.notAvailableTime.during during}
   * @type {IPeriod} during
   */
  during?: IPeriod;
}
