import { IBuildable } from '../../../globals/interfaces';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IElement } from '../../interfaces/base';
import { IAddress, ICodeableConcept, IContactPoint, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IOrganizationContact } from '../../interfaces/backbones';
import Organization from './Organization';

type ParamsExtensionType = 'implicitRules' | 'language' | 'active' | 'alias' | 'name';

export interface IOrganizationBuilder
  extends IBuildable<Organization>,
    IDomainResourceBuilder<OrganizationBuilder>,
    IResourceBuilder<OrganizationBuilder> {
  addParamExtension<T extends ParamsExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): OrganizationBuilder;

  setActive(active: boolean): OrganizationBuilder;

  addIdentifier(identifier: IIdentifier): OrganizationBuilder;

  setMultipleIdentifier(identifiers: IIdentifier[]): OrganizationBuilder;

  addAlias(alias: string): OrganizationBuilder;

  setMultipleAlias(aliases: string[]): OrganizationBuilder;

  addType(type: ICodeableConcept): OrganizationBuilder;

  setMultipleType(types: ICodeableConcept[]): OrganizationBuilder;

  setName(name: string): OrganizationBuilder;

  addTelecom(telecom: IContactPoint): OrganizationBuilder;

  setMultipleTelecom(telecoms: IContactPoint[]): OrganizationBuilder;

  addAddress(address: IAddress): OrganizationBuilder;

  setMultipleAddress(addresses: IAddress[]): OrganizationBuilder;

  setPartOf(partOf: IReference): OrganizationBuilder;

  addContact(contact: IOrganizationContact): OrganizationBuilder;

  setMultipleContact(contacts: IOrganizationContact[]): OrganizationBuilder;

  addEndpoint(endpoint: IReference): OrganizationBuilder;

  setMultipleEndpoint(endpoints: IReference[]): OrganizationBuilder;

  setMultipleEndpoint(endpoints: IReference[]): OrganizationBuilder;
}

export class OrganizationBuilder extends DomainResourceBuilder<OrganizationBuilder> implements IOrganizationBuilder {
  private readonly organization: Organization;

  constructor() {
    super();
    this.organization = new Organization();
  }

  addParamExtension<T extends ParamsExtensionType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): OrganizationBuilder {
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

  addAddress(address: IAddress): OrganizationBuilder {
    this.organization.address = this.organization.address || [];
    this.organization.address.push(address);

    return this;
  }

  addTelecom(telecom: IContactPoint): OrganizationBuilder {
    this.organization.telecom = this.organization.telecom || [];
    this.organization.telecom.push(telecom);

    return this;
  }

  addContact(contact: IOrganizationContact): OrganizationBuilder {
    this.organization.contact = this.organization.contact || [];
    this.organization.contact.push(contact);

    return this;
  }

  setMultipleAddress(addresses: IAddress[]): OrganizationBuilder {
    this.organization.address = addresses;

    return this;
  }

  setMultipleContact(contacts: IOrganizationContact[]): OrganizationBuilder {
    this.organization.contact = contacts;

    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): OrganizationBuilder {
    this.organization.telecom = telecoms;

    return this;
  }

  build(): Organization {
    Object.assign(this.organization, { ...super.entity() });
    return this.organization.toJson();
  }
}
