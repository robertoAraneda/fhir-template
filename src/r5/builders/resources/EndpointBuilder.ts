import { IEndpoint } from '../../interfaces/resources';
import { ICodeableConcept, IContactPoint, IPeriod, IIdentifier } from '../../interfaces/datatypes';
import { IReference, IElement, IBuildable, ISerializable } from '../../interfaces/base';
import { IEndpointPayload } from '../../interfaces/backbones';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { Endpoint } from '../../resources';

type ParamType = 'address' | 'description' | 'header' | 'name' | 'status' | 'implicitRules' | 'language';
export class EndpointBuilder
  extends DomainResourceBuilder<EndpointBuilder>
  implements IBuildable<Endpoint>, ISerializable
{
  private endpoint: Endpoint;
  constructor() {
    super();
    this.endpoint = new Endpoint();
  }

  fromJSON(data: Partial<Endpoint>) {
    if (!data.address) throw new Error('Endpoint.address is required');
    if (!data.connectionType) throw new Error('Endpoint.connectionType is required');
    this.endpoint = {
      address: data.address,
      connectionType: data.connectionType,
      resourceType: 'Endpoint',
      ...data,
    };
    return {
      build: () => this.build(),
      serialize: () => this.serialize(),
    };
  }

  addEndpointParamExtension(param: ParamType, extension: IElement): EndpointBuilder {
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
