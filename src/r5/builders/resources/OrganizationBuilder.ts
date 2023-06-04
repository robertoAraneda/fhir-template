import { OrganizationQualification } from '../../interfaces/backbones';
import { Organization } from '../../interfaces/resources';
import { Element, Reference, Buildable, Serializable } from '../../interfaces/base';
import { ExtendedContactDetail, Identifier, CodeableConcept } from '../../interfaces/datatypes';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';

type ParamsType = 'active' | 'alias' | 'description' | 'name';
export class OrganizationBuilder
  extends DomainResourceBuilder<OrganizationBuilder>
  implements Buildable<Organization>, Serializable
{
  private readonly organization: Organization;

  constructor() {
    super();
    this.organization = {} as Organization;
    this.organization.resourceType = 'Organization';
  }

  addOrganizationParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'alias' ? Element[] : Element,
  ): OrganizationBuilder {
    if (param === 'alias') {
      this.organization._alias = extension as Element[];
    } else {
      const localParam = param as Exclude<ParamsType, 'alias'>;

      this.organization[`_${localParam}`] = extension as Element;
    }

    return this;
  }

  /**
   * @description Identifies this organization  across multiple systems
   * @param identifier
   * @returns {OrganizationBuilder}
   */
  addIdentifier(identifier: Identifier): OrganizationBuilder {
    this.organization.identifier = this.organization.identifier || [];
    this.organization.identifier.push(identifier);

    return this;
  }

  /**
   * Set Multiple Identifier
   * @param identifiers Array of Identifiers
   * @returns {OrganizationBuilder} OrganizationBuilder
   */
  setMultipleIdentifier(identifiers: Identifier[]): OrganizationBuilder {
    this.organization.identifier = identifiers;

    return this;
  }

  /**
   * @description Set the active status of the organization
   * @param active boolean
   * @returns {OrganizationBuilder} OrganizationBuilder
   */
  setActive(active: boolean): OrganizationBuilder {
    this.organization.active = active;

    return this;
  }

  addType(type: CodeableConcept): OrganizationBuilder {
    this.organization.type = this.organization.type || [];
    this.organization.type.push(type);

    return this;
  }

  setMultipleType(types: CodeableConcept[]): OrganizationBuilder {
    this.organization.type = types;

    return this;
  }

  setName(name: string): OrganizationBuilder {
    this.organization.name = name;

    return this;
  }

  addAlias(alias: string): OrganizationBuilder {
    this.organization.alias = this.organization.alias || [];
    this.organization.alias.push(alias);

    return this;
  }

  setMultipleAlias(aliases: string[]): OrganizationBuilder {
    this.organization.alias = aliases;

    return this;
  }

  setDescription(description: string): OrganizationBuilder {
    this.organization.description = description;

    return this;
  }

  addContact(contact: ExtendedContactDetail): OrganizationBuilder {
    this.organization.contact = this.organization.contact || [];
    this.organization.contact.push(contact);

    return this;
  }

  setMultipleContact(contacts: ExtendedContactDetail[]): OrganizationBuilder {
    this.organization.contact = contacts;

    return this;
  }

  setPartOf(partOf: Reference): OrganizationBuilder {
    this.organization.partOf = partOf;

    return this;
  }

  addEndpoint(endpoint: Reference): OrganizationBuilder {
    this.organization.endpoint = this.organization.endpoint || [];
    this.organization.endpoint.push(endpoint);

    return this;
  }

  setMultipleEndpoint(endpoints: Reference[]): OrganizationBuilder {
    this.organization.endpoint = endpoints;

    return this;
  }

  addQualification(qualification: OrganizationQualification): OrganizationBuilder {
    this.organization.qualification = this.organization.qualification || [];
    this.organization.qualification.push(qualification);

    return this;
  }

  setMultipleQualification(qualifications: OrganizationQualification[]): OrganizationBuilder {
    this.organization.qualification = qualifications;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): Organization {
    return { ...this.organization, ...super.entity() };
  }

  build(): Organization {
    return JSON.parse(this.serialize());
  }
}
