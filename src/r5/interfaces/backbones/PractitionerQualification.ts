import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Identifier } from '../datatypes/Identifier';
import { Reference } from '../base/Reference';
import { Period } from '../datatypes/Period';
import { BackboneElement } from '../base/BackboneElement';

/**
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care.
 * @property {CodeableConcept} code
 * @property {Identifier[]} identifier
 * @property {Reference} issuer
 * @property {Period} period
 * @see {@link https://www.hl7.org/fhir/practitioner-definitions.html#Practitioner.qualification HL7.org/fhir/practitioner-definitions.html#Practitioner.qualification}
 * @author Roberto Araneda
 * @since  2023-06-01
 */
export interface PractitionerQualification extends BackboneElement {
  /**
   * Coded representation of the qualification
   * @type {CodeableConcept} code
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.code
   */
  code: CodeableConcept;

  /**
   * An identifier for this qualification for the organization
   * @type {Identifier[]} identifier
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.identifier
   */
  identifier?: Identifier[];

  /**
   * Organization that regulates and issues the qualification
   * @type {Reference} issuer
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.issuer
   */
  issuer?: Reference;

  /**
   * Period during which the qualification is valid
   * @type {Period} period
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.period
   */
  period?: Period;
}
