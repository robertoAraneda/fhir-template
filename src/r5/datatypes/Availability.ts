import { Element } from './Element';
import { AvailableTime } from './AvailableTime';
import { NotAvailableTime } from './NotAvailableTime';

/**
 * @description Availability data for an {item}
 * @see {@link http://hl7.org/fhir/R5/practitionerrole-definitions.html#PractitionerRole.availability availability}
 *
 */
export class Availability extends Element {
  /**
   * @description Times the {item} is available
   * @see {@link http://hl7.org/fhir/R5/metadatatypes-definitions.html#Availability.availableTime availableTime}
   * @type {AvailableTime[]}
   * @memberof Availability
   */
  availableTime?: AvailableTime[];

  /**
   * @description Not available during this time due to provided reason
   * @see {@link http://hl7.org/fhir/R5/metadatatypes-definitions.html#Availability.notAvailableTime notAvailableTime}
   * @type {NotAvailableTime[]}
   * @memberof Availability
   */
  notAvailableTime?: NotAvailableTime[];

  constructor(args?: Partial<Availability>) {
    super();
    Object.assign(this, args);
  }
}
