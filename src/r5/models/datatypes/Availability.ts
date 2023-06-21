import { IAvailability, IAvailableTime, IExtension, INotAvailableTime } from '../../interfaces/datatypes';
import Element from '../base/Element';
import AvailabilityBuilder from './AvailabilityBuilder';

/**
 * @description Availability data for an {item}.
 * @property {string} id
 * @property {IExtension[]} extension
 * @property {IAvailableTime[]} availableTime
 * @property {INotAvailableTime[]} notAvailableTime
 * @see https://www.hl7.org/fhir/metadatatypes.html#Availability FHIR API
 * @author Roberto Araneda
 */
export default class Availability extends Element implements IAvailability {
  /**
   * @description Times the {item} is available.
   */
  availableTime?: IAvailableTime[];

  /**
   * @description Not available during this time due to provided reason.
   */
  notAvailableTime?: INotAvailableTime[];

  static builder(): AvailabilityBuilder {
    return new AvailabilityBuilder();
  }

  toJson(): Availability {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Availability${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Availability${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IAvailability) {
    super();
    Object.assign(this, args);
  }
}
