import { IEndpoint } from '../../interfaces/resources';
import { ICodeableConcept, ICoding, IContactPoint, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { IElement } from '../../interfaces/base';
import DomainResource from '../base/DomainResource';
import { EndpointBuilder, IEndpointBuilder } from './EndpointBuilder';

export default class Endpoint extends DomainResource implements IEndpoint {
  resourceType = 'Endpoint' as const;

  // Endpoint attributes
  identifier?: IIdentifier[];
  status: EndpointStatusEnum | EndpointStatusType;
  connectionType: ICoding;
  name?: string;
  managingOrganization?: IReference;
  contact?: IContactPoint[];
  period?: IPeriod;
  payloadType: ICodeableConcept[];
  payloadMimeType?: string[];
  address: string;
  header?: string[];

  // Extensions
  _address?: IElement;
  _header?: IElement[];
  _name?: IElement;
  _status?: IElement;
  _payloadMimeType?: IElement[];

  toJson(): Endpoint {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Endpoint${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Endpoint${JSON.stringify(this.toJson())}`;
  }

  static builder(): EndpointBuilder {
    return new EndpointBuilder();
  }

  constructor(args?: IEndpoint) {
    super();
    Object.assign(this, args);
  }
}
