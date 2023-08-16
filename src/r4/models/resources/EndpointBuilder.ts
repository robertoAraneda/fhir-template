import { DomainResourceBuilder, IDomainResourceBuilder } from '../base/DomainResourceBuilder';
import { IElement } from '../../interfaces/base';
import {
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IIdentifier,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { EndpointStatusEnum } from '../../../enums';
import { EndpointStatusType } from '../../../types';
import { IBuildable } from '../../../globals/interfaces';
import { IResourceBuilder } from '../base/ResourceBuilder';
import Endpoint from './Endpoint';
import { IEndpoint } from '../../interfaces/resources';

type ParamExtensionType = 'implicitRules' | 'language' | 'address' | 'name' | 'status' | 'header' | 'payloadMimeType';

export interface IEndpointBuilder
  extends IBuildable<Endpoint>,
    IDomainResourceBuilder<EndpointBuilder>,
    IResourceBuilder<EndpointBuilder> {
  addParamExtension<T extends ParamExtensionType>(
    param: T,
    element: T extends 'header' | 'payloadMimeType' ? IElement[] : IElement,
  ): this;

  addIdentifier(identifier: IIdentifier): this;

  setMultipleIdentifier(identifier: IIdentifier[]): this;

  setStatus(status: EndpointStatusEnum | EndpointStatusType): this;

  setConnectionType(connectionType: ICoding): this;

  setName(name: string): this;

  setManagingOrganization(managingOrganization: IReference): this;

  addContact(contact: IContactPoint): this;

  setMultipleContact(contact: IContactPoint[]): this;

  setPeriod(period: IPeriod): this;

  addPayloadType(payloadType: ICodeableConcept): this;

  setMultiplePayloadType(payloadType: ICodeableConcept[]): this;

  addPayloadMimeType(payloadMimeType: string): this;

  setMultiplePayloadMimeType(payloadMimeType: string[]): this;

  setAddress(address: string): this;

  addHeader(header: string): this;

  setMultipleHeader(header: string[]): this;
}

export class EndpointBuilder extends DomainResourceBuilder<EndpointBuilder> implements IEndpointBuilder {
  private readonly endpoint: IEndpoint;

  constructor() {
    super();
    this.endpoint = {} as IEndpoint;
  }

  addParamExtension<T extends ParamExtensionType>(
    param: T,
    extension: T extends 'header' | 'payloadMimeType' ? IElement[] : IElement,
  ): this {
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
    return new Endpoint(this.endpoint).toJson();
  }

  setAddress(address: string): this {
    this.endpoint.address = address;

    return this;
  }

  setConnectionType(connectionType: ICoding): this {
    this.endpoint.connectionType = connectionType;

    return this;
  }

  setMultipleContact(contact: IContactPoint[]): this {
    this.endpoint.contact = contact;

    return this;
  }

  setMultipleHeader(header: string[]): this {
    this.endpoint.header = header;

    return this;
  }

  setMultipleIdentifier(identifier: IIdentifier[]): this {
    this.endpoint.identifier = identifier;

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

  setPeriod(period: IPeriod): this {
    this.endpoint.period = period;

    return this;
  }

  setStatus(status: EndpointStatusEnum | EndpointStatusType): this {
    this.endpoint.status = status;

    return this;
  }

  addContact(contact: IContactPoint): this {
    this.endpoint.contact = this.endpoint.contact || [];
    this.endpoint.contact.push(contact);

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

  addPayloadMimeType(payloadMimeType: string): this {
    this.endpoint.payloadMimeType = this.endpoint.payloadMimeType || [];
    this.endpoint.payloadMimeType.push(payloadMimeType);

    return this;
  }

  addPayloadType(payloadType: ICodeableConcept): this {
    this.endpoint.payloadType = this.endpoint.payloadType || [];
    this.endpoint.payloadType.push(payloadType);

    return this;
  }

  setMultiplePayloadMimeType(payloadMimeType: string[]): this {
    this.endpoint.payloadMimeType = payloadMimeType;
    return this;
  }

  setMultiplePayloadType(payloadType: ICodeableConcept[]): this {
    this.endpoint.payloadType = payloadType;
    return this;
  }
}
