import { IBackboneElement } from '../base';
import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';

/**
 * A qualification for the organization
 * @property {ICodeableConcept} code
 * @property {IIdentifier[]} identifier
 * @property {IReference} issuer
 * @property {IPeriod} period
 * @see {@link https://www.hl7.org/fhir/organization-definitions.html#Organization.qualification HL7.org/fhir/organization-definitions.html#Organization.qualification}
 * @since 2021-10-06
 * @version 1.0.0
 * @interface
 * @export
 * @author Roberto Araneda
 */
export interface IOrganizationQualification extends IBackboneElement {
  /**
   * Coded representation of the qualification
   * @type {CodeableConcept} code
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.code
   */
  code: ICodeableConcept;

  /**
   * An identifier for this qualification for the organization
   * @type {IIdentifier[]} identifier
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.identifier
   */
  identifier?: IIdentifier[];

  /**
   * Organization that regulates and issues the qualification
   * @type {IReference} issuer
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.issuer
   */
  issuer?: IReference;

  /**
   * Period during which the qualification is valid
   * @type {IPeriod} period
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.period
   */
  period?: IPeriod;
}
