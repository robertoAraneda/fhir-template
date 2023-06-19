import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IElement } from '../../interfaces/base';
import { ICodeableConcept, ICoding, IContactPoint, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import Endpoint from './Endpoint';

type ParamExtensionType = 'implicitRules' | 'language' | 'address' | 'name' | 'status' | 'header' | 'payloadMimeType';

export interface IEndpointBuilder
  extends IBuildable<Endpoint>,
    IDomainResourceBuilder<EndpointBuilder>,
    IResourceBuilder<EndpointBuilder> {
  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'header' | 'payloadMimeType' ? IElement[] : IElement,
  ): EndpointBuilder;

  addIdentifier(identifier: IIdentifier): EndpointBuilder;

  setMultipleIdentifier(identifier: IIdentifier[]): EndpointBuilder;

  setStatus(status: EndpointStatusEnum | EndpointStatusType): EndpointBuilder;

  setConnectionType(connectionType: ICoding): EndpointBuilder;

  setName(name: string): EndpointBuilder;

  setManagingOrganization(managingOrganization: IReference): EndpointBuilder;

  addContact(contact: IContactPoint): EndpointBuilder;

  setMultipleContact(contact: IContactPoint[]): EndpointBuilder;

  setPeriod(period: IPeriod): EndpointBuilder;

  addPayloadType(payloadType: ICodeableConcept): EndpointBuilder;

  setMultiplePayloadType(payloadType: ICodeableConcept[]): EndpointBuilder;

  addPayloadMimeType(payloadMimeType: string): EndpointBuilder;

  setMultiplePayloadMimeType(payloadMimeType: string[]): EndpointBuilder;

  setAddress(address: string): EndpointBuilder;

  addHeader(header: string): EndpointBuilder;

  setMultipleHeader(header: string[]): EndpointBuilder;
}

export class EndpointBuilder extends DomainResourceBuilder<EndpointBuilder> implements IEndpointBuilder {
  private readonly endpoint: Endpoint;

  constructor() {
    super();
    this.endpoint = new Endpoint();
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'header' | 'payloadMimeType' ? IElement[] : IElement,
  ): EndpointBuilder {
    const includes = ['header', 'payloadMimeType'];
    if (includes.includes(param)) {
      const localMultipleParam = param as Exclude<
        ParamExtensionType,
        'implicitRules' | 'language' | 'address' | 'name' | 'status'
      >;
      this.endpoint[`_${localMultipleParam}`] = extension as IElement[];
    } else {
      const localParam = param as Exclude<ParamExtensionType, 'header' | 'payloadMimeType'>;
      this.endpoint[`_${localParam}`] = extension as IElement;
    }
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

  setConnectionType(connectionType: ICoding): EndpointBuilder {
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

  addPayloadType(payloadType: ICodeableConcept): EndpointBuilder {
    this.endpoint.payloadType = this.endpoint.payloadType || [];
    this.endpoint.payloadType.push(payloadType);

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
