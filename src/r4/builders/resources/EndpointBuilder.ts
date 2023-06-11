import { IEndpoint } from '../../interfaces/resources';
import { ICodeableConcept, IContactPoint, IPeriod, IIdentifier, IReference } from '../../interfaces/datatypes';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { Endpoint } from '../../models/resources';
import { IBuildable, ISerializable } from '../../../globals/interfaces';
import { DomainResourceBuilder } from '../base/DomainResourceBuilder';
import { createBuildAndSerializeMethods } from '../../../globals/helpers/buildAndSerialize';
import { IElement } from '../../interfaces/base';

type ParamType = 'implicitRules' | 'language' | 'address' | 'name' | 'status' | 'header' | 'payloadMimeType';
interface IEndpointBuilder extends IBuildable<IEndpoint>, ISerializable {
  fromJSON(json: any): Pick<IEndpointBuilder, 'serialize' | 'build'>;
  addParamExtension(param: ParamType, extension: IElement[] | IElement): EndpointBuilder;
  addIdentifier(identifier: IIdentifier): EndpointBuilder;
  setMultipleIdentifier(identifier: IIdentifier[]): EndpointBuilder;
  setStatus(status: EndpointStatusEnum | EndpointStatusType): EndpointBuilder;
  addConnectionType(connectionType: ICodeableConcept): EndpointBuilder;
  setMultipleConnectionType(connectionType: ICodeableConcept[]): EndpointBuilder;
  setName(name: string): EndpointBuilder;
  setManagingOrganization(managingOrganization: IReference): EndpointBuilder;
  addContact(contact: IContactPoint): EndpointBuilder;
  setMultipleContact(contact: IContactPoint[]): EndpointBuilder;
  setPeriod(period: IPeriod): EndpointBuilder;
  addPayloadType(payloadType: ICodeableConcept[]): EndpointBuilder;
  setMultiplePayloadType(payloadType: ICodeableConcept[]): EndpointBuilder;
  addPayloadMimeType(payloadMimeType: string): EndpointBuilder;
  setMultiplePayloadMimeType(payloadMimeType: string[]): EndpointBuilder;
  setAddress(address: string): EndpointBuilder;
  addHeader(header: string): EndpointBuilder;
  setMultipleHeader(header: string[]): EndpointBuilder;
}
export class EndpointBuilder extends DomainResourceBuilder<EndpointBuilder> implements IEndpointBuilder {
  private endpoint: IEndpoint;
  constructor() {
    super();
    this.endpoint = new Endpoint();
  }

  fromJSON(data: IEndpoint): Pick<IEndpointBuilder, 'serialize' | 'build'> {
    if (!data.address) throw new Error('Endpoint.address is required');
    if (!data.connectionType) throw new Error('Endpoint.connectionType is required');
    if (!data.payloadType) throw new Error('Endpoint.payloadType is required');
    this.endpoint = data;
    return createBuildAndSerializeMethods(this.endpoint);
  }

  addParamExtension<T extends ParamType>(
    param: T,
    extension: T extends 'header' | 'payloadMimeType' ? IElement[] : IElement,
  ): EndpointBuilder {
    const includes = ['header', 'payloadMimeType'];
    if (includes.includes(param)) {
      const localMultipleParam = param as Exclude<
        ParamType,
        'implicitRules' | 'language' | 'address' | 'name' | 'status'
      >;
      this.endpoint[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamType, 'header' | 'payloadMimeType'>;
      this.endpoint[`_${localParam}`] = extension as IElement;
    }
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  raw(): IEndpoint {
    return {
      ...this.endpoint,
      ...super.entity(),
    };
  }

  build(): IEndpoint {
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

  addPayloadMimeType(payloadMimeType: string): EndpointBuilder {
    this.endpoint.payloadMimeType = this.endpoint.payloadMimeType || [];
    this.endpoint.payloadMimeType.push(payloadMimeType);

    return this;
  }

  addPayloadType(payloadType: ICodeableConcept[]): EndpointBuilder {
    this.endpoint.payloadType = this.endpoint.payloadType || [];
    this.endpoint.payloadType.push(...payloadType);

    return this;
  }

  setMultiplePayloadMimeType(payloadMimeType: string[]): EndpointBuilder {
    this.endpoint.payloadMimeType = payloadMimeType;
    return this;
  }

  setMultiplePayloadType(payloadType: ICodeableConcept[]): EndpointBuilder {
    this.endpoint.payloadType = payloadType;
    return this;
  }
}
