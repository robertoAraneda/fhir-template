import { Endpoint } from '../../interfaces/resources';
import { CodeableConcept, ContactPoint, Period, Identifier } from '../../interfaces/datatypes';
import { Reference, Element, Buildable, Serializable } from '../../interfaces/base';
import { EndpointPayload } from '../../interfaces/backbones';
import { EndpointStatus } from '../../enums/EndpointStatus';
import { EndpointStatusType } from '../../types/EndpointStatusType';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';

type ParamType = 'address' | 'description' | 'header' | 'name' | 'status' | 'implicitRules' | 'language';
export class EndpointBuilder
  extends DomainResourceBuilder<EndpointBuilder>
  implements Buildable<Endpoint>, Serializable
{
  private readonly endpoint: Endpoint;
  constructor() {
    super();
    this.endpoint = {} as Endpoint;
    this.endpoint.resourceType = 'Endpoint';
  }

  addEndpointParamExtension(param: ParamType, extension: Element): EndpointBuilder {
    this.endpoint[`_${param}`] = extension;

    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): Endpoint {
    return {
      ...this.endpoint,
      ...super.entity(),
    };
  }

  build(): Endpoint {
    return JSON.parse(this.serialize());
  }

  setAddress(address: string): EndpointBuilder {
    this.endpoint.address = address;

    return this;
  }

  setMultipleConnectionType(connectionType: CodeableConcept[]): EndpointBuilder {
    this.endpoint.connectionType = connectionType;

    return this;
  }

  setMultipleContact(contact: ContactPoint[]): EndpointBuilder {
    this.endpoint.contact = contact;

    return this;
  }

  setDescription(description: string): EndpointBuilder {
    this.endpoint.description = description;

    return this;
  }

  setMultipleEnvironmentType(environmentType: CodeableConcept[]): EndpointBuilder {
    this.endpoint.environmentType = environmentType;

    return this;
  }

  setMultipleHeader(header: string[]): EndpointBuilder {
    this.endpoint.header = header;

    return this;
  }

  setMultipleIdentifier(identifier: Identifier[]): EndpointBuilder {
    this.endpoint.identifier = identifier;

    return this;
  }

  setManagingOrganization(managingOrganization: Reference): EndpointBuilder {
    this.endpoint.managingOrganization = managingOrganization;

    return this;
  }

  setName(name: string): EndpointBuilder {
    this.endpoint.name = name;

    return this;
  }

  setMultiplePayload(payload: EndpointPayload[]): EndpointBuilder {
    this.endpoint.payload = payload;

    return this;
  }

  setPeriod(period: Period): EndpointBuilder {
    this.endpoint.period = period;

    return this;
  }

  setStatus(status: EndpointStatus | EndpointStatusType): EndpointBuilder {
    this.endpoint.status = status;

    return this;
  }

  addConnectionType(connectionType: CodeableConcept): EndpointBuilder {
    this.endpoint.connectionType = this.endpoint.connectionType || [];
    this.endpoint.connectionType.push(connectionType);

    return this;
  }

  addContact(contact: ContactPoint): EndpointBuilder {
    this.endpoint.contact = this.endpoint.contact || [];
    this.endpoint.contact.push(contact);

    return this;
  }

  addEnvironmentType(environmentType: CodeableConcept): EndpointBuilder {
    this.endpoint.environmentType = this.endpoint.environmentType || [];
    this.endpoint.environmentType.push(environmentType);

    return this;
  }

  addHeader(header: string): EndpointBuilder {
    this.endpoint.header = this.endpoint.header || [];
    this.endpoint.header.push(header);

    return this;
  }

  addIdentifier(identifier: Identifier): EndpointBuilder {
    this.endpoint.identifier = this.endpoint.identifier || [];
    this.endpoint.identifier.push(identifier);

    return this;
  }

  addPayload(payload: EndpointPayload): EndpointBuilder {
    this.endpoint.payload = this.endpoint.payload || [];
    this.endpoint.payload.push(payload);

    return this;
  }
}
