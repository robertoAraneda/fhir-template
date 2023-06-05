import { IElement } from '../base';
import { IAvailableTime } from './index';
import { INotAvailableTime } from './index';

/**
 * @description Availability data for an {item}
 * @property {IAvailableTime[]} availableTime - Times the {item} is available
 * @property {INotAvailableTime[]} notAvailableTime - Not available during this time due to provided reason
 * @see {@link http://hl7.org/fhir/R5/practitionerrole-definitions.html#PractitionerRole.availability availability}
 * @author Roberto Araneda
 * @since 2023-06-01
 */
export interface IAvailability extends IElement {
  /**
   * @description Times the {item} is available
   * @see {@link http://hl7.org/fhir/R5/metadatatypes-definitions.html#Availability.availableTime availableTime}
   * @type {IAvailableTime[]} availableTime
   */
  availableTime?: IAvailableTime[];

  /**
   * @description Not available during this time due to provided reason
   * @see {@link http://hl7.org/fhir/R5/metadatatypes-definitions.html#Availability.notAvailableTime notAvailableTime}
   * @type {INotAvailableTime[]} notAvailableTime
   */
  notAvailableTime?: INotAvailableTime[];
}
