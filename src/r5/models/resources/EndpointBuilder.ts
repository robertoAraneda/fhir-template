import { ICodeableConcept, IContactPoint, IPeriod, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IEndpointPayload } from '../../interfaces/backbones';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Endpoint } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IElement } from '../../interfaces/base';
import { IResourceBuilder } from '../base/ResourceBuilder';

type ParamExtensionType = 'address' | 'description' | 'header' | 'name' | 'status' | 'implicitRules' | 'language';

interface IEndpointBuilder
  extends IBuildable<Endpoint>,
    IDomainResourceBuilder<EndpointBuilder>,
    IResourceBuilder<EndpointBuilder> {
  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): EndpointBuilder;
  setAddress(address: string): EndpointBuilder;
  setMultipleConnectionType(connectionType: ICodeableConcept[]): EndpointBuilder;
  setMultipleContact(contact: IContactPoint[]): EndpointBuilder;
  setDescription(description: string): EndpointBuilder;
  setMultipleEnvironmentType(environmentType: ICodeableConcept[]): EndpointBuilder;
  setMultipleHeader(header: string[]): EndpointBuilder;
  setMultipleIdentifier(identifier: IIdentifier[]): EndpointBuilder;
  setManagingOrganization(managingOrganization: IReference): EndpointBuilder;
  setName(name: string): EndpointBuilder;
  setMultiplePayload(payload: IEndpointPayload[]): EndpointBuilder;
  setPeriod(period: IPeriod): EndpointBuilder;
  setStatus(status: EndpointStatusType): EndpointBuilder;
  addConnectionType(contentType: ICodeableConcept): EndpointBuilder;
  addContact(contact: IContactPoint): EndpointBuilder;
  addEnvironmentType(environmentType: ICodeableConcept): EndpointBuilder;
  addHeader(header: string): EndpointBuilder;
  addIdentifier(identifier: IIdentifier): EndpointBuilder;
  addPayload(payload: IEndpointPayload): EndpointBuilder;
}
export default class EndpointBuilder extends DomainResourceBuilder<EndpointBuilder> implements IEndpointBuilder {
  private readonly endpoint: Endpoint;
  constructor() {
    super();
    this.endpoint = new Endpoint();
  }

  addParamExtension<T extends ParamExtensionType>(param: T, extension: IElement): EndpointBuilder {
    this.endpoint[`_${param}`] = extension;

    return this;
  }

  build(): Endpoint {
    Object.assign(this.endpoint, { ...super.entity() });
    return this.endpoint.toJson();
  }

  setAddress(address: string): EndpointBuilder {
    this.endpoint.address = address;

    return this;
  }

  setMultipleConnectionType(connectionType: ICodeableConcept[]): EndpointBuilder {
    this.endpoint.connectionType = connectionType;

    return this;
  }

  setMultipleContact(contact: IContactPoint[]): EndpointBuilder {
    this.endpoint.contact = contact;

    return this;
  }

  setDescription(description: string): EndpointBuilder {
    this.endpoint.description = description;

    return this;
  }

  setMultipleEnvironmentType(environmentType: ICodeableConcept[]): EndpointBuilder {
    this.endpoint.environmentType = environmentType;

    return this;
  }

  setMultipleHeader(header: string[]): EndpointBuilder {
    this.endpoint.header = header;

    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): EndpointBuilder {
    this.endpoint.identifier = identifier;

    return this;
  }

  setManagingOrganization(managingOrganization: IReference): EndpointBuilder {
    this.endpoint.managingOrganization = managingOrganization;

    return this;
  }

  setName(name: string): EndpointBuilder {
    this.endpoint.name = name;

    return this;
  }

  setMultiplePayload(payload: IEndpointPayload[]): EndpointBuilder {
    this.endpoint.payload = payload;

    return this;
  }

  setPeriod(period: IPeriod): EndpointBuilder {
    this.endpoint.period = period;

    return this;
  }

  setStatus(status: EndpointStatusEnum | EndpointStatusType): EndpointBuilder {
    this.endpoint.status = status;

    return this;
  }

  addConnectionType(connectionType: ICodeableConcept): EndpointBuilder {
    this.endpoint.connectionType = this.endpoint.connectionType || [];
    this.endpoint.connectionType.push(connectionType);

    return this;
  }

  addContact(contact: IContactPoint): EndpointBuilder {
    this.endpoint.contact = this.endpoint.contact || [];
    this.endpoint.contact.push(contact);

    return this;
  }

  addEnvironmentType(environmentType: ICodeableConcept): EndpointBuilder {
    this.endpoint.environmentType = this.endpoint.environmentType || [];
    this.endpoint.environmentType.push(environmentType);

    return this;
  }

  addHeader(header: string): EndpointBuilder {
    this.endpoint.header = this.endpoint.header || [];
    this.endpoint.header.push(header);

    return this;
  }

  addIdentifier(identifier: IIdentifier): EndpointBuilder {
    this.endpoint.identifier = this.endpoint.identifier || [];
    this.endpoint.identifier.push(identifier);

    return this;
  }

  addPayload(payload: IEndpointPayload): EndpointBuilder {
    this.endpoint.payload = this.endpoint.payload || [];
    this.endpoint.payload.push(payload);

    return this;
  }
}
