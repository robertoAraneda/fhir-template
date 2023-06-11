import { Organization } from '../../models/resources';
import { IElement } from '../../interfaces/base';
import { IIdentifier, ICodeableConcept, IReference, IAddress, IContactPoint } from '../../interfaces/datatypes';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IOrganization } from '../../interfaces/resources';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { IOrganizationContact } from '../../interfaces/backbones';

type ParamsType = 'implicitRules' | 'language' | 'active' | 'alias' | 'name';
interface IOrganizationBuilder extends IBuildable<Organization>, ISerializable {
  addOrganizationParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): this;
  setActive(active: boolean): this;
  addIdentifier(identifier: IIdentifier): this;
  setMultipleIdentifier(identifiers: IIdentifier[]): this;
  addAlias(alias: string): this;
  setMultipleAlias(aliases: string[]): this;
  addType(type: ICodeableConcept): this;
  setMultipleType(types: ICodeableConcept[]): this;
  setName(name: string): this;
  addTelecom(telecom: IContactPoint): this;
  setMultipleTelecom(telecoms: IContactPoint[]): this;
  addAddress(address: IAddress): this;
  setMultipleAddress(addresses: IAddress[]): this;
  setPartOf(partOf: IReference): this;
  addContact(contact: IOrganizationContact): this;
  setMultipleContact(contacts: IOrganizationContact[]): this;
  addEndpoint(endpoint: IReference): this;
  setMultipleEndpoint(endpoints: IReference[]): this;
  setMultipleEndpoint(endpoints: IReference[]): this;
}
export class OrganizationBuilder extends DomainResourceBuilder<OrganizationBuilder> implements IOrganizationBuilder {
  private readonly organization: IOrganization;

  constructor() {
    super();
    this.organization = new Organization();
  }

  addOrganizationParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): this {
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
    this.organization.identifier = identifiers;

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
    this.organization.type = types;

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
    this.organization.alias = aliases;

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
    this.organization.endpoint = endpoints;

    return this;
  }

  addAddress(address: IAddress): this {
    this.organization.address = this.organization.address || [];
    this.organization.address.push(address);

    return this;
  }

  addTelecom(telecom: IContactPoint): this {
    this.organization.telecom = this.organization.telecom || [];
    this.organization.telecom.push(telecom);

    return this;
  }

  addContact(contact: IOrganizationContact): this {
    this.organization.contact = this.organization.contact || [];
    this.organization.contact.push(contact);

    return this;
  }

  setMultipleAddress(addresses: IAddress[]): this {
    this.organization.address = addresses;

    return this;
  }

  setMultipleContact(contacts: IOrganizationContact[]): this {
    this.organization.contact = contacts;

    return this;
  }

  setMultipleTelecom(telecoms: IContactPoint[]): this {
    this.organization.telecom = telecoms;

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
