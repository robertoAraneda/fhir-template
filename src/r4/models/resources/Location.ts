import { ILocation } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IExtension,
  IIdentifier,
  IMeta,
  INarrative,
  IReference,
} from '../../interfaces/datatypes';
import { ILocationHoursOfOperation, ILocationPosition } from '../../interfaces/backbones';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';

export default class Location implements ILocation {
  // Resource Attributes
  resourceType: string = 'Location';
  id?: number | string;
  meta?: IMeta;
  implicitRules?: string;
  language?: string;

  // Extension Resource Attributes
  _language?: IElement;
  _implicitRules?: IElement;

  // DomainResource Attributes
  text?: INarrative;
  contained?: IResource[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];

  // Location Attributes
  identifier?: IIdentifier[];
  status?: LocationStatusEnum | LocationStatusType;
  operationalStatus?: ICoding;
  name?: string;
  alias?: string[];
  description?: string;
  mode?: LocationModeEnum | LocationModeType;
  type?: ICodeableConcept[];
  telecom?: IContactPoint[];
  address?: IAddress;
  physicalType?: ICodeableConcept;
  position?: ILocationPosition;
  managingOrganization?: IReference;
  partOf?: IReference;
  hoursOfOperation?: ILocationHoursOfOperation[];
  availabilityExceptions?: string;
  endpoint?: IReference[];

  // Extensions Location Attributes
  _alias?: IElement[];
  _availabilityExceptions?: IElement;
  _description?: IElement;
  _mode?: IElement;
  _name?: IElement;
  _status?: IElement;

  constructor(args?: ILocation) {
    if (args) {
      this.resourceType = 'Location';
      this.identifier = args.identifier;
      this.status = args.status;
      this.operationalStatus = args.operationalStatus;
      this.name = args.name;
      this.alias = args.alias;
      this.description = args.description;
      this.mode = args.mode;
      this.type = args.type;
      this.telecom = args.telecom;
      this.address = args.address;
      this.physicalType = args.physicalType;
      this.position = args.position;
      this.managingOrganization = args.managingOrganization;
      this.partOf = args.partOf;
      this.hoursOfOperation = args.hoursOfOperation;
      this.availabilityExceptions = args.availabilityExceptions;
      this.endpoint = args.endpoint;
      this._alias = args._alias;
      this._availabilityExceptions = args._availabilityExceptions;
      this._description = args._description;
      this._mode = args._mode;
      this._name = args._name;
      this._status = args._status;
    }
  }
}
