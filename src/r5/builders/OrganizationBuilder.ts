import { DomainResourceBuilder } from './DomainResourceBuilder';
import { Organization } from '../resources/Organization';
import { Identifier } from '../datatypes/Identifier';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { ExtendedContactDetail } from '../datatypes/ExtendedContactDetail';
import { Reference } from '../datatypes/Reference';
import { Endpoint } from '../datatypes/Endpoint';
import { OrganizationQualification } from '../backbones/OrganizationCualification';

export class OrganizationBuilder extends DomainResourceBuilder<OrganizationBuilder, Organization> {
  private _identifier: Identifier[];
  private _active: boolean;
  private _type: CodeableConcept[];
  private _name: string;
  private _alias: string[];
  private _description: string;
  private _contact: ExtendedContactDetail[];
  private _partOf: Reference<Organization | string>;
  private _endpoint: Reference<Endpoint | string>[];
  private _qualification: OrganizationQualification[];

  /**
   * @description Identifies this organization  across multiple systems
   * @param identifier
   * @returns {OrganizationBuilder}
   */
  addIdentifier(identifier: Identifier): OrganizationBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier.push(identifier);

    return this;
  }

  /**
   * @param index
   * @param identifier
   * @returns {OrganizationBuilder}
   */
  setIdentifier(index: number, identifier: Identifier): OrganizationBuilder {
    if (!this._identifier) this._identifier = [];
    this._identifier[index] = identifier;

    return this;
  }

  /**
   * @param identifiers
   * @returns {OrganizationBuilder}
   */
  setMultipleIdentifier(identifiers: Identifier[]): OrganizationBuilder {
    this._identifier = identifiers;

    return this;
  }

  /**
   * @description Get Identifier by index
   * @param index
   */
  getIdentifier(index: number) {
    return {
      get: () => this._identifier[index],
      setIdentifier: (value: Identifier) => this.setIdentifier(index, value),
    };
  }

  /**
   * @description Get all Identifier as Identifier[]
   * @returns {Identifier[]}
   */
  getAllIdentifier() {
    return this._identifier;
  }

  /**
   * @description Set the active status of the organization
   * @param active
   * @returns {OrganizationBuilder}
   */
  setActive(active: boolean): OrganizationBuilder {
    this._active = active;

    return this;
  }

  /**
   * @description Get the active status of the organization
   * @returns {boolean}
   */
  getActive() {
    return this._active;
  }

  addType(type: CodeableConcept): OrganizationBuilder {
    if (!this._type) this._type = [];
    this._type.push(type);

    return this;
  }

  setType(index: number, type: CodeableConcept): OrganizationBuilder {
    if (!this._type) this._type = [];
    this._type[index] = type;

    return this;
  }

  setMultipleType(types: CodeableConcept[]): OrganizationBuilder {
    this._type = types;

    return this;
  }

  getType(index: number) {
    return {
      get: () => this._type[index],
      setType: (value: CodeableConcept) => this.setType(index, value),
    };
  }

  getAllType() {
    return this._type;
  }

  setName(name: string): OrganizationBuilder {
    this._name = name;

    return this;
  }

  getName() {
    return this._name;
  }

  addAlias(alias: string): OrganizationBuilder {
    if (!this._alias) this._alias = [];
    this._alias.push(alias);

    return this;
  }

  setAlias(index: number, alias: string): OrganizationBuilder {
    if (!this._alias) this._alias = [];
    this._alias[index] = alias;

    return this;
  }

  setMultipleAlias(aliases: string[]): OrganizationBuilder {
    this._alias = aliases;

    return this;
  }

  getAlias(index: number) {
    return {
      get: () => this._alias[index],
      setAlias: (value: string) => this.setAlias(index, value),
    };
  }

  getAllAlias() {
    return this._alias;
  }

  setDescription(description: string): OrganizationBuilder {
    this._description = description;

    return this;
  }

  getDescription() {
    return this._description;
  }

  addContact(contact: ExtendedContactDetail): OrganizationBuilder {
    if (!this._contact) this._contact = [];

    this._contact.push(contact);

    return this;
  }

  setContact(index: number, contact: ExtendedContactDetail): OrganizationBuilder {
    if (!this._contact) this._contact = [];
    this._contact[index] = contact;

    return this;
  }

  setMultipleContact(contacts: ExtendedContactDetail[]): OrganizationBuilder {
    this._contact = contacts;

    return this;
  }

  getContact(index: number) {
    return {
      get: () => this._contact[index],
      setContact: (value: ExtendedContactDetail) => this.setContact(index, value),
    };
  }

  getAllContact() {
    return this._contact;
  }

  setPartOf(partOf: Reference<Organization | string>): OrganizationBuilder {
    this._partOf = partOf;

    return this;
  }

  getPartOf() {
    return this._partOf;
  }

  addEndpoint(endpoint: Reference<Endpoint | string>): OrganizationBuilder {
    if (!this._endpoint) this._endpoint = [];
    this._endpoint.push(endpoint);

    return this;
  }

  setEndpoint(index: number, endpoint: Reference<Endpoint | string>): OrganizationBuilder {
    if (!this._endpoint) this._endpoint = [];
    this._endpoint[index] = endpoint;

    return this;
  }

  setMultipleEndpoint(endpoints: Reference<Endpoint | string>[]): OrganizationBuilder {
    this._endpoint = endpoints;

    return this;
  }

  getEndpoint(index: number) {
    return {
      get: () => this._endpoint[index],
      setEndpoint: (value: Reference<Endpoint | string>) => this.setEndpoint(index, value),
    };
  }

  getAllEndpoint() {
    return this._endpoint;
  }

  addQualification(qualification: OrganizationQualification): OrganizationBuilder {
    if (!this._qualification) this._qualification = [];
    this._qualification.push(qualification);

    return this;
  }

  setQualification(index: number, qualification: OrganizationQualification): OrganizationBuilder {
    if (!this._qualification) this._qualification = [];
    this._qualification[index] = qualification;

    return this;
  }

  setMultipleQualification(qualifications: OrganizationQualification[]): OrganizationBuilder {
    this._qualification = qualifications;

    return this;
  }

  getQualification(index: number) {
    return {
      get: () => this._qualification[index],
      setQualification: (value: OrganizationQualification) => this.setQualification(index, value),
    };
  }

  getAllQualification() {
    return this._qualification;
  }

  build(): Organization {
    const domainResource = super.build();

    return new Organization({
      resourceType: 'Organization',
      ...domainResource,
      identifier: this._identifier,
      active: this._active,
      type: this._type,
      name: this._name,
      alias: this._alias,
      description: this._description,
      contact: this._contact,
      partOf: this._partOf,
      endpoint: this._endpoint,
      qualification: this._qualification,
    });
  }

  constructor() {
    super();
  }
}
