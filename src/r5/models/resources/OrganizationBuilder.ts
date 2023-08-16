import { IOrganizationQualification } from '../../interfaces/backbones';
import { Organization } from './index';
import { IExtendedContactDetail, IIdentifier, ICodeableConcept, IReference } from '../../interfaces/datatypes';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IBuildable } from '../../../globals/interfaces';
import { IOrganization } from '../../interfaces/resources';

type ParamsExtensionType = 'active' | 'alias' | 'description' | 'name';

interface IOrganizationBuilder
  extends IBuildable<Organization>,
    IDomainResourceBuilder<OrganizationBuilder>,
    IResourceBuilder<OrganizationBuilder> {
  addParamExtension<T extends ParamsExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  setActive(active: boolean): this;
  addType(type: ICodeableConcept): this;
  setMultipleType(types: ICodeableConcept[]): this;
  setName(name: string): this;
  addAlias(alias: string): this;
  setMultipleAlias(aliases: string[]): this;
  setDescription(description: string): this;
  addContact(contact: IExtendedContactDetail): this;
  setMultipleContact(contacts: IExtendedContactDetail[]): this;
  setPartOf(partOf: IReference): this;
  addEndpoint(endpoint: IReference): this;
  setMultipleEndpoint(endpoints: IReference[]): this;
  addQualification(qualification: IOrganizationQualification): this;
  setMultipleQualification(qualifications: IOrganizationQualification[]): this;
}
export default class OrganizationBuilder
  extends DomainResourceBuilder<OrganizationBuilder>
  implements IOrganizationBuilder
{
  private readonly organization: IOrganization;

  constructor() {
    super();
    this.organization = {} as IOrganization;
  }

  addParamExtension<T extends ParamsExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): this {
    if (param === 'alias') {
      this.organization._alias = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamsExtensionType, 'alias'>;

      this.organization[`_${localParam}`] = extension as IElement;
    }

    return this;
  }

  /**
   * @description Identifies this organization  across multiple systems
   * @param identifier
   * @returns {OrganizationBuilder}
   */
  addIdentifier(identifier: IIdentifier): this {
    this.organization.identifier = this.organization.identifier || [];
    this.organization.identifier.push(identifier);

    return this;
  }

  /**
   * Set Multiple Identifier
   * @param identifiers Array of Identifiers
   * @returns {OrganizationBuilder} OrganizationBuilder
   */
  setMultipleIdentifier(identifiers: IIdentifier[]): this {
    identifiers.forEach((identifier) => this.addIdentifier(identifier));

    return this;
  }

  /**
   * @description Set the active status of the organization
   * @param active boolean
   * @returns {OrganizationBuilder} OrganizationBuilder
   */
  setActive(active: boolean): this {
    this.organization.active = active;

    return this;
  }

  addType(type: ICodeableConcept): this {
    this.organization.type = this.organization.type || [];
    this.organization.type.push(type);

    return this;
  }

  setMultipleType(types: ICodeableConcept[]): this {
    types.forEach((type) => this.addType(type));

    return this;
  }

  setName(name: string): this {
    this.organization.name = name;

    return this;
  }

  addAlias(alias: string): this {
    this.organization.alias = this.organization.alias || [];
    this.organization.alias.push(alias);

    return this;
  }

  setMultipleAlias(aliases: string[]): this {
    aliases.forEach((alias) => this.addAlias(alias));

    return this;
  }

  setDescription(description: string): this {
    this.organization.description = description;

    return this;
  }

  addContact(contact: IExtendedContactDetail): this {
    this.organization.contact = this.organization.contact || [];
    this.organization.contact.push(contact);

    return this;
  }

  setMultipleContact(contacts: IExtendedContactDetail[]): this {
    contacts.forEach((contact) => this.addContact(contact));

    return this;
  }

  setPartOf(partOf: IReference): this {
    this.organization.partOf = partOf;

    return this;
  }

  addEndpoint(endpoint: IReference): this {
    this.organization.endpoint = this.organization.endpoint || [];
    this.organization.endpoint.push(endpoint);

    return this;
  }

  setMultipleEndpoint(endpoints: IReference[]): this {
    endpoints.forEach((endpoint) => this.addEndpoint(endpoint));

    return this;
  }

  addQualification(qualification: IOrganizationQualification): this {
    this.organization.qualification = this.organization.qualification || [];
    this.organization.qualification.push(qualification);

    return this;
  }

  setMultipleQualification(qualifications: IOrganizationQualification[]): this {
    qualifications.forEach((qualification) => this.addQualification(qualification));

    return this;
  }

  build(): Organization {
    Object.assign(this.organization, { ...super.entity() });
    return new Organization(this.organization).toJson();
  }
}
