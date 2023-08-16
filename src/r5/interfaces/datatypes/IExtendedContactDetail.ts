import { IElement } from '../base';
import ICodeableConcept from './ICodeableConcept';
import IHumanName from './IHumanName';
import IContactPoint from './IContactPoint';
import IAddress from './IAddress';
import IReference from './IReference';
import IPeriod from './IPeriod';

/**
 * @description Contact information
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
export default interface IExtendedContactDetail extends IElement {
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
}
