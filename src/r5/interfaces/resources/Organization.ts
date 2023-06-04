import { DomainResource } from '../base/DomainResource';
import { Identifier } from '../datatypes/Identifier';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ExtendedContactDetail } from '../datatypes/ExtendedContactDetail';
import { OrganizationQualification } from '../backbones/OrganizationQualification';
import { Element } from '../base/Element';
import { Reference } from '../base/Reference';

export interface Organization extends DomainResource {
  /**
   * @description Identifies this organization  across multiple systems
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.identifier
   */
  identifier?: Identifier[];

  /**
   * @description Whether the organization's record is still in active use
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.active
   */
  active?: boolean;
  _active?: Element;

  /**
   * @description Kind of organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.type
   */
  type?: CodeableConcept[];

  /**
   * @description Name used for the organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.name
   */
  name?: string;
  _name?: Element;

  /**
   * @description A list of alternate names that the organization is known as, or was known as in the past
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.alias
   */
  alias?: string[];
  _alias?: Element[];

  /**
   * @description Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.telecom
   */
  description?: string;
  _description?: Element;

  /**
   * @description A contact detail for the organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.contact
   */
  contact?: ExtendedContactDetail[];

  /**
   * @description The organization of which this organization forms a part.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.partOf
   */
  partOf?: Reference;

  /**
   * @description Technical endpoints providing access to services operated for the organization.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.endpoint
   */
  endpoint?: Reference[];

  /**
   * @description Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification
   */
  qualification?: OrganizationQualification[];
}
