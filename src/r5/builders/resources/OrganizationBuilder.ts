import { IOrganizationQualification } from '../../interfaces/backbones';
import { Organization } from '../../models/resources';
import { IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { IExtendedContactDetail, IIdentifier, ICodeableConcept, IReference } from '../../interfaces/datatypes';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IOrganization } from '../../interfaces/resources';
import { validateReference } from '../../../globals/helpers/validateReference';

type ParamsType = 'active' | 'alias' | 'description' | 'name';

interface IOrganizationBuilder extends IBuildable<Organization>, ISerializable {
  addParamExtension<T extends ParamsType>(
    param: T,
    extension: T extends 'alias' ? IElement[] : IElement,
  ): OrganizationBuilder;
  addIdentifier(identifier: IIdentifier): OrganizationBuilder;
  setMultipleIdentifier(identifiers: IIdentifier[]): OrganizationBuilder;
  setActive(active: boolean): OrganizationBuilder;
  addType(type: ICodeableConcept): OrganizationBuilder;
  setMultipleType(types: ICodeableConcept[]): OrganizationBuilder;
  setName(name: string): OrganizationBuilder;
  addAlias(alias: string): OrganizationBuilder;
  setMultipleAlias(aliases: string[]): OrganizationBuilder;
  setDescription(description: string): OrganizationBuilder;
  addContact(contact: IExtendedContactDetail): OrganizationBuilder;
  setMultipleContact(contacts: IExtendedContactDetail[]): OrganizationBuilder;
  setPartOf(partOf: IReference): OrganizationBuilder;
  addEndpoint(endpoint: IReference): OrganizationBuilder;
  setMultipleEndpoint(endpoints: IReference[]): OrganizationBuilder;
  addQualification(qualification: IOrganizationQualification): OrganizationBuilder;
  setMultipleQualification(qualifications: IOrganizationQualification[]): OrganizationBuilder;
}
export default class OrganizationBuilder
  extends DomainResourceBuilder<OrganizationBuilder>
  implements IOrganizationBuilder
{
  private readonly organization: IOrganization;

  constructor() {
    super();
    this.organization = new Organization();
  }

  addParamExtension<T extends ParamsType>(
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
    if (identifier.assigner?.reference) {
      validateReference(identifier.assigner.reference, ['Organization']);
    }
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
    for (const identifier of identifiers) {
      if (identifier.assigner?.reference) {
        validateReference(identifier.assigner.reference, ['Organization']);
      }
    }
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
    if (partOf.reference) {
      validateReference(partOf.reference, ['Organization']);
    }
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
