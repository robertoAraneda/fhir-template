import { IEndpoint } from '../../interfaces/resources';
import { ICodeableConcept, IContactPoint, IIdentifier, IPeriod, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import { IEndpointPayload } from '../../interfaces/backbones';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import DomainResource from '../base/DomainResource';
import EndpointBuilder from './EndpointBuilder';
import { EndpointValidator } from './EndpointValidator';

export default class Endpoint extends DomainResource implements IEndpoint {
  _address?: IElement;
  _description?: IElement;
  _header?: IElement;
  _name?: IElement;
  _status?: IElement;
  address: string;
  connectionType: ICodeableConcept[];
  contact?: IContactPoint[];
  description?: string;
  environmentType?: ICodeableConcept[];
  header?: string[];
  identifier?: IIdentifier[];
  managingOrganization?: IReference;
  name?: string;
  payload?: IEndpointPayload[];
  period?: IPeriod;
  resourceType = 'Endpoint' as const;
  status?: EndpointStatusEnum | EndpointStatusType;

  static builder(): EndpointBuilder {
    return new EndpointBuilder();
  }

  toJson(): Endpoint {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Endpoint${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Endpoint${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: IEndpoint) {
    super();
    EndpointValidator(args);
    Object.assign(this, args);
  }
}
