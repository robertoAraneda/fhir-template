import { ICodeableConcept, IContactPoint, IPeriod, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IEndpointPayload } from '../../interfaces/backbones';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Endpoint } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IResourceBuilder } from '../base/ResourceBuilder';
import { IEndpoint } from '../../interfaces/resources';

type ParamExtensionType = 'address' | 'description' | 'header' | 'name' | 'status' | 'implicitRules' | 'language';

export interface IEndpointBuilder
  extends IBuildable<Endpoint>,
    IDomainResourceBuilder<EndpointBuilder>,
    IResourceBuilder<EndpointBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this;
  setAddress(address: string): this;
  setMultipleConnectionType(connectionType: ICodeableConcept[]): this;
  setMultipleContact(contact: IContactPoint[]): this;
  setDescription(description: string): this;
  setMultipleEnvironmentType(environmentType: ICodeableConcept[]): this;
  setMultipleHeader(header: string[]): this;
  setMultipleIdentifier(identifier: IIdentifier[]): this;
  setManagingOrganization(managingOrganization: IReference): this;
  setName(name: string): this;
  setMultiplePayload(payload: IEndpointPayload[]): this;
  setPeriod(period: IPeriod): this;
  setStatus(status: EndpointStatusType): this;
  addContact(contact: IContactPoint): this;
  addEnvironmentType(environmentType: ICodeableConcept): this;
  addHeader(header: string): this;
  addIdentifier(identifier: IIdentifier): this;
  addPayload(payload: IEndpointPayload): this;
}

export default class EndpointBuilder extends DomainResourceBuilder<EndpointBuilder> implements IEndpointBuilder {
  private readonly endpoint: IEndpoint;
  constructor() {
    super();
    this.endpoint = {} as IEndpoint;
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): this {
    this.endpoint[`_${param}`] = extension;

    return this;
  }

  build(): Endpoint {
    Object.assign(this.endpoint, { ...super.entity() });
    return new Endpoint(this.endpoint).toJson();
  }

  setAddress(address: string): this {
    this.endpoint.address = address;

    return this;
  }

  setMultipleConnectionType(connectionType: ICodeableConcept[]): this {
    this.endpoint.connectionType = connectionType;

    return this;
  }

  setMultipleContact(contact: IContactPoint[]): this {
    contact.forEach((item) => this.addContact(item));

    return this;
  }

  setDescription(description: string): this {
    this.endpoint.description = description;

    return this;
  }

  setMultipleEnvironmentType(environmentType: ICodeableConcept[]): this {
    environmentType.forEach((item) => this.addEnvironmentType(item));

    return this;
  }

  setMultipleHeader(header: string[]): this {
    header.forEach((item) => this.addHeader(item));

    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): this {
    identifier.forEach((item) => this.addIdentifier(item));

    return this;
  }

  setManagingOrganization(managingOrganization: IReference): this {
    this.endpoint.managingOrganization = managingOrganization;

    return this;
  }

  setName(name: string): this {
    this.endpoint.name = name;

    return this;
  }

  setMultiplePayload(payload: IEndpointPayload[]): this {
    payload.forEach((item) => this.addPayload(item));

    return this;
  }

  setPeriod(period: IPeriod): this {
    this.endpoint.period = period;

    return this;
  }

  setStatus(status: EndpointStatusEnum | EndpointStatusType): this {
    this.endpoint.status = status;

    return this;
  }

  addConnectionType(connectionType: ICodeableConcept): this {
    this.endpoint.connectionType = this.endpoint.connectionType || [];
    this.endpoint.connectionType.push(connectionType);

    return this;
  }

  addContact(contact: IContactPoint): this {
    this.endpoint.contact = this.endpoint.contact || [];
    this.endpoint.contact.push(contact);

    return this;
  }

  addEnvironmentType(environmentType: ICodeableConcept): this {
    this.endpoint.environmentType = this.endpoint.environmentType || [];
    this.endpoint.environmentType.push(environmentType);

    return this;
  }

  addHeader(header: string): this {
    this.endpoint.header = this.endpoint.header || [];
    this.endpoint.header.push(header);

    return this;
  }

  addIdentifier(identifier: IIdentifier): this {
    this.endpoint.identifier = this.endpoint.identifier || [];
    this.endpoint.identifier.push(identifier);

    return this;
  }

  addPayload(payload: IEndpointPayload): this {
    this.endpoint.payload = this.endpoint.payload || [];
    this.endpoint.payload.push(payload);

    return this;
  }
}
