import { IAvailability, IAvailableTime, IExtension, INotAvailableTime } from '../../interfaces/datatypes';

/**
 * @description Availability data for an {item}.
 * @property {string} id
 * @property {IExtension[]} extension
 * @property {IAvailableTime[]} availableTime
 * @property {INotAvailableTime[]} notAvailableTime
 * @see https://www.hl7.org/fhir/metadatatypes.html#Availability FHIR API
 * @author Roberto Araneda
 */
export class Availability implements IAvailability {
  /**
   * @description Unique id for inter-element referencing.
   */
  id?: string;

  /**
   * @description Additional content defined by implementations.
   */
  extension?: IExtension[];

  /**
   * @description Times the {item} is available.
   */
  availableTime?: IAvailableTime[];

  /**
   * @description Not available during this time due to provided reason.
   */
  notAvailableTime?: INotAvailableTime[];

  constructor(args?: IAvailability) {
    Object.assign(this, args);
  }
}
