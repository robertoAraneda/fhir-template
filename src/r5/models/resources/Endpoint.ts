import { IEndpoint } from '../../interfaces/resources';
import {
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IPeriod,
  IReference,
} from '../../interfaces/datatypes';
import { IElement, IResource } from '../../interfaces/base';
import { IEndpointPayload } from '../../interfaces/backbones';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';

export default class Endpoint implements IEndpoint {
  _address?: IElement;
  _description?: IElement;
  _header?: IElement;
  _implicitRules?: IElement;
  _language?: IElement;
  _name?: IElement;
  _status?: IElement;
  address: string;
  connectionType: ICodeableConcept[];
  contact?: IContactPoint[];
  contained?: IResource[];
  description?: string;
  environmentType?: ICodeableConcept[];
  extension?: IExtension[];
  header?: string[];
  id?: number | string;
  identifier?: IIdentifier[];
  implicitRules?: string;
  language?: string;
  managingOrganization?: IReference;
  meta?: IMeta;
  modifierExtension?: IExtension[];
  name?: string;
  payload?: IEndpointPayload[];
  period?: IPeriod;
  resourceType = 'Endpoint';
  status?: EndpointStatusEnum | EndpointStatusType;
  text?: INarrative;

  constructor(args?: Endpoint) {
    Object.assign(this, args);
  }
}
