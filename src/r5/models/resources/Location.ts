import { ILocation } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  ICodeableConcept,
  ICoding,
  IExtendedContactDetail,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IReference,
  IVirtualServiceDetail,
} from '../../interfaces/datatypes';
import { Availability } from '../datatypes';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { ILocationPosition } from '../../interfaces/backbones';

export default class Location implements ILocation {
  // Resource Attributes
  resourceType: string = 'Location';
  id?: number | string;
  implicitRules?: string;
  language?: string;
  meta?: IMeta;

  // Extension Resource Attributes
  _implicitRules?: IElement;
  _language?: IElement;

  // DomainResource Attributes
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];
  text?: INarrative;

  // Location Attributes
  address?: IAddress;
  alias?: string[];
  characteristic?: ICodeableConcept[];
  contact?: IExtendedContactDetail[];
  description?: string;
  endpoint?: IReference[];
  form?: ICodeableConcept;
  hoursOfOperation?: Availability[];
  identifier?: IIdentifier[];
  managingOrganization?: IReference;
  mode?: LocationModeEnum | LocationModeType;
  name?: string;
  operationalStatus?: ICoding;
  partOf?: IReference;
  position?: ILocationPosition;
  status?: LocationStatusEnum | LocationStatusType;
  type?: ICodeableConcept[];
  virtualService?: IVirtualServiceDetail[];

  _status?: IElement;

  // Extensions Location Attributes
  _alias?: IElement[];
  _description?: IElement;
  _mode?: IElement;
  _name?: IElement;

  constructor(args?: ILocation) {
    Object.assign(this, args);
  }
}
