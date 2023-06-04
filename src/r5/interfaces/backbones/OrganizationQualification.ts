import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Identifier } from '../datatypes/Identifier';
import { Reference } from '../base/Reference';
import { Period } from '../datatypes/Period';

/**
 * A qualification for the organization
 * BackboneElement
 */
export interface OrganizationQualification extends BackboneElement {
  /**
   * Coded representation of the qualification
   * @type {CodeableConcept}
   * @memberof OrganizationQualificationBuilder
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.code
   */
  code: CodeableConcept;

  /**
   * An identifier for this qualification for the organization
   * @type {Identifier[]}
   * @memberof OrganizationQualificationBuilder
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.identifier
   */
  identifier?: Identifier[];

  /**
   * Organization that regulates and issues the qualification
   * @type {Reference<Organization | string>}
   * @memberof OrganizationQualificationBuilder
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.issuer
   */
  issuer?: Reference;

  /**
   * Period during which the qualification is valid
   * @type {Period}
   * @memberof OrganizationQualificationBuilder
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification.period
   */
  period?: Period;
}
