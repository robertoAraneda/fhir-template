import { ILocation } from '../../interfaces/resources';
import { IElement, IResource } from '../../interfaces/base';
import {
  IAddress,
  IAvailability,
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
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { ILocationPosition } from '../../interfaces/backbones';
import DomainResource from '../base/DomainResource';
import LocationBuilder from './LocationBuilder';
import { LocationValidator } from './LocationValidator';

export default class Location extends DomainResource implements ILocation {
  // Resource Attributes
  resourceType = 'Location' as const;

  // Location Attributes
  address?: IAddress;
  alias?: string[];
  characteristic?: ICodeableConcept[];
  contact?: IExtendedContactDetail[];
  description?: string;
  endpoint?: IReference[];
  form?: ICodeableConcept;
  hoursOfOperation?: IAvailability[];
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

  static builder(): LocationBuilder {
    return new LocationBuilder();
  }

  toJson(): Location {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `Location${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `Location${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args: ILocation) {
    super();
    LocationValidator(args);
    Object.assign(this, args);
  }
}
