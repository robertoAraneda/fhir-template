import {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IExtendedContactDetail,
  IHumanName,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import ExtendedContactDetailBuilder from './ExtendedContactDetailBuilder';
import Element from '../base/Element';
import { ExtendedContactDetailValidator } from './ExtendedContactDetailValidator';

/**
 * @description Contact information
 * @property {string} id - Unique id for inter-element referencing
 * @property {IExtension[]} extension - Additional content defined by implementations
 * @property {ICodeableConcept} purpose - The type of contact
 * @property {IHumanName[]} name - Name of an individual to contact
 * @property {IContactPoint[]} telecom - 	Contact details (e.g.phone/fax/url)
 * @property {IAddress} address - Address for the contact
 * @property {IReference} organization - This contact detail is handled/monitored by a specific organization
 * @property {IPeriod} period -	Period that this contact was valid for usage
 * @see  https://www.hl7.org/fhir/metadatatypes.html#ExtendedContactDetail ExtendedContactDetail
 * @author Roberto Araneda
 * @example ```json
 * {
 *   // from Element: extension
 *   "purpose" : { CodeableConcept }, // The type of contact icon
 *   "name" : [{ HumanName }], // Name of an individual to contact
 *   "telecom" : [{ ContactPoint }], // Contact details (e.g.phone/fax/url)
 *   "address" : { Address }, // Address for the contact
 *   "organization" : { Reference(Organization) }, // This contact detail is handled/monitored by a specific organization
 *   "period" : { Period } // Period that this contact was valid for usage
 * }
 * ```
 */
export default class ExtendedContactDetail extends Element implements IExtendedContactDetail {
  /**
   * @description The type of contact icon
   */
  purpose?: ICodeableConcept;

  /**
   * @description Name of an individual to contact
   */
  name?: IHumanName[];
  /**
   * @description Contact details (e.g.phone/fax/url)
   */
  telecom?: IContactPoint[];

  /**
   * @description Address for the contact
   */
  address?: IAddress;

  /**
   * @description This contact detail is handled/monitored by a specific organization
   */
  organization?: IReference;

  /**
   * @description Period that this contact was valid for usage
   */
  period?: IPeriod;

  static builder(): ExtendedContactDetailBuilder {
    return new ExtendedContactDetailBuilder();
  }

  toJson(): ExtendedContactDetail {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `ExtendedContactDetail${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `ExtendedContactDetail${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IExtendedContactDetail) {
    super();
    ExtendedContactDetailValidator(args);
    Object.assign(this, args);
  }
}
