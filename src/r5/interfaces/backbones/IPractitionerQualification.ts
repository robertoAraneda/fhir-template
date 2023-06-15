import { ICodeableConcept, IIdentifier, IPeriod, IReference } from '../datatypes';
import { IBackboneElement } from '../base';

/**
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care.
 * @property {ICodeableConcept} code
 * @property {IIdentifier[]} identifier
 * @property {IReference} issuer
 * @property {IPeriod} period
 * @see {@link https://www.hl7.org/fhir/practitioner-definitions.html#Practitioner.qualification HL7.org/fhir/practitioner-definitions.html#Practitioner.qualification}
 * @author Roberto Araneda
 * @since  2023-06-01
 */
export interface IPractitionerQualification extends IBackboneElement {
  /**
   * Coded representation of the qualification
   * @type {ICodeableConcept} code
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
