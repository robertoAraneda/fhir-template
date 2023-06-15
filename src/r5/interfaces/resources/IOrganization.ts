import { IDomainResource, IElement } from '../base';
import { IIdentifier, ICodeableConcept, IExtendedContactDetail, IReference } from '../datatypes';
import { IOrganizationQualification } from '../backbones';

/**
 * @description A grouping of people or organizations with a common purpose
 * @property {IIdentifier[]} identifier - Identifies this organization  across multiple systems
 * @see https://hl7.org/fhir/organization-definitions.html#Organization
 * @interface IOrganization
 * @export IOrganization
 * @extends {IDomainResource} IDomainResource
 */
export interface IOrganization extends IDomainResource {
  /**
   * @description Identifies this organization  across multiple systems
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.identifier
   * @type {IIdentifier} identifier
   */
  identifier?: IIdentifier[];

  /**
   * @description Whether the organization's record is still in active use
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.active
   */
  active?: boolean;
  _active?: IElement;

  /**
   * @description Kind of organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.type
   */
  type?: ICodeableConcept[];

  /**
   * @description Name used for the organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.name
   */
  name?: string;
  _name?: IElement;

  /**
   * @description A list of alternate names that the organization is known as, or was known as in the past
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.alias
   */
  alias?: string[];
  _alias?: IElement[];

  /**
   * @description Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.telecom
   */
  description?: string;
  _description?: IElement;

  /**
   * @description A contact detail for the organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.contact
   */
  contact?: IExtendedContactDetail[];

  /**
   * @description The organization of which this organization forms a part.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.partOf
   */
  partOf?: IReference;

  /**
   * @description Technical endpoints providing access to services operated for the organization.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.endpoint
   */
  endpoint?: IReference[];

  /**
   * @description Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care.
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification
   */
  qualification?: IOrganizationQualification[];
}
