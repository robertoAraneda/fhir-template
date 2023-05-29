import { Identifier } from '../datatypes/Identifier';
import { DomainResource } from '../datatypes/DomainResource';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ContactPoint } from '../datatypes/ContactPoint';
import { Reference } from '../datatypes/Reference';
import { ExtendedContactDetail } from '../datatypes/ExtendedContactDetail';
import { Endpoint } from '../datatypes/Endpoint';
import { OrganizationQualification } from '../datatypes/OrganizationCualification';

/**
 * @description A grouping of people or organizations with a common purpose
 * @class
 * @memberof r5/resources/Organization
 * @see https://hl7.org/fhir/organization.html
 */
export class Organization extends DomainResource {
  resourceType = 'Organization';

  /**
   * @description Identifies this organization  across multiple systems
   * @type {Identifier[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.identifier
   */
  identifier?: Identifier[];

  /**
   * @description Whether the organization's record is still in active use
   * @type {boolean}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.active
   */
  active?: boolean;

  /**
   * @description Kind of organization
   * @type {CodeableConcept[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.type
   */
  type?: CodeableConcept[];

  /**
   * @description Name used for the organization
   * @type {string}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.name
   */
  name?: string;

  /**
   * @description A list of alternate names that the organization is known as, or was known as in the past
   * @type {string[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.alias
   */
  alias?: string[];

  /**
   * @description Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name.
   * @type {ContactPoint[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.telecom
   */
  description?: string;

  /**
   * @description A contact detail for the organization
   * @type {ExtendedContactDetail[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.contact
   */
  contact?: ExtendedContactDetail[];

  /**
   * @description The organization of which this organization forms a part.
   * @type {Reference<Organization | string>}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.partOf
   */
  partOf?: Reference<Organization | string>;

  /**
   * @description Technical endpoints providing access to services operated for the organization.
   * @type {Reference<Endpoint | string>[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.endpoint
   */
  endpoint?: Reference<Endpoint | string>[];

  /**
   * @description Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care.
   * @type {OrganizationQualification[]}
   * @memberof r5/resources/Organization
   * @see https://hl7.org/fhir/organization-definitions.html#Organization.qualification
   */
  qualification?: OrganizationQualification[];
  constructor(args?: Partial<Organization>) {
    super();
    Object.assign(this, args);
  }
}
