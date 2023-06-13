import { IOrganizationQualification } from '../../interfaces/backbones';
import { Organization } from '../../models/resources';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { IExtendedContactDetail, IIdentifier, ICodeableConcept, IReference } from '../../interfaces/datatypes';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IOrganization } from '../../interfaces/resources';

type ParamsType = 'active' | 'alias' | 'description' | 'name';
export default class OrganizationBuilder
  extends DomainResourceBuilder<OrganizationBuilder>
  implements IBuildable<Organization>, ISerializable
{
  private readonly organization: IOrganization;

  constructor() {
    super();
    this.organization = new Organization();
  }

  addOrganizationParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): OrganizationBuilder {
    if (param === 'alias') {
      this.organization._alias = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamsType, 'alias'>;

      this.organization[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  /**
   * @description Identifies this organization  across multiple systems
   * @param identifier
   * @returns {OrganizationBuilder}
   */
  addIdentifier(identifier: IIdentifier): OrganizationBuilder {
    this.organization.identifier = this.organization.identifier || [];
    this.organization.identifier.push(identifier);

    return this;
  }

  /**
   * Set Multiple Identifier
   * @param identifiers Array of Identifiers
   * @returns {OrganizationBuilder} OrganizationBuilder
   */
  setMultipleIdentifier(identifiers: IIdentifier[]): OrganizationBuilder {
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

  addType(type: ICodeableConcept): OrganizationBuilder {
    this.organization.type = this.organization.type || [];
    this.organization.type.push(type);

    return this;
  }

  setMultipleType(types: ICodeableConcept[]): OrganizationBuilder {
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

  addContact(contact: IExtendedContactDetail): OrganizationBuilder {
    this.organization.contact = this.organization.contact || [];
    this.organization.contact.push(contact);

    return this;
  }

  setMultipleContact(contacts: IExtendedContactDetail[]): OrganizationBuilder {
    this.organization.contact = contacts;

    return this;
  }

  setPartOf(partOf: IReference): OrganizationBuilder {
    this.organization.partOf = partOf;

    return this;
  }

  addEndpoint(endpoint: IReference): OrganizationBuilder {
    this.organization.endpoint = this.organization.endpoint || [];
    this.organization.endpoint.push(endpoint);

    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): OrganizationBuilder {
    this.organization.endpoint = endpoints;

    return this;
  }

  addQualification(qualification: IOrganizationQualification): OrganizationBuilder {
    this.organization.qualification = this.organization.qualification || [];
    this.organization.qualification.push(qualification);

    return this;
  }

  setMultipleQualification(qualifications: IOrganizationQualification[]): OrganizationBuilder {
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
