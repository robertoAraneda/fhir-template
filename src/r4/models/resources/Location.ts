import { ILocation } from '../../interfaces/resources';
import { IElement } from '../../interfaces/base';
import {
  IAddress,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IIdentifier,
  IReference,
} from '../../interfaces/datatypes';
import { ILocationHoursOfOperation, ILocationPosition } from '../../interfaces/backbones';
import { LocationModeEnum, LocationStatusEnum } from '../../../enums';
import { LocationModeType, LocationStatusType } from '../../../types';
import DomainResource from '../base/DomainResource';
import { LocationBuilder } from './LocationBuilder';
import { LocationValidator } from './LocationValidator';

export default class Location extends DomainResource implements ILocation {
  // Resource Attributes
  resourceType = 'Location' as const;

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

  toJson(): Location {
    return JSON.parse(JSON.stringify(this));
  }

  toPrettyString(): string {
    return `Location${JSON.stringify(this.toJson(), null, 2)}`;
  }

  toString(): string {
    return `Location${JSON.stringify(this.toJson())}`;
  }

  static builder(): LocationBuilder {
    return new LocationBuilder();
  }

  constructor(args: ILocation) {
    super();
    LocationValidator(args);
    Object.assign(this, args);
  }
}
