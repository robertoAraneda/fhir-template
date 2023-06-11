import { IEndpoint } from '../../interfaces/resources';
import {
  ICodeableConcept,
  IContactPoint,
  IExtension,
  IIdentifier,
  IMeta,
  IPeriod,
  INarrative,
  IReference,
} from '../../interfaces/datatypes';
import { EndpointStatusEnum } from '../../enums';
import { EndpointStatusType } from '../../types';
import { IElement, IResource } from '../../interfaces/base';

export class Endpoint implements IEndpoint {
  resourceType: string = 'Endpoint';

  // Resource attributes
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  language?: string;
  _implicitRules?: IElement;
  _language?: IElement;

  // DomainResource attributes
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];

  // Endpoint attributes
  identifier?: IIdentifier[];
  status: EndpointStatusEnum | EndpointStatusType;
  connectionType: ICodeableConcept[];
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

  constructor(args?: IEndpoint) {
    Object.assign(this, args);
  }
}
