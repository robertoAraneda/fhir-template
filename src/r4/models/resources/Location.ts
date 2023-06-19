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
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import DomainResource from '../base/DomainResource';
import { ILocationBuilder, LocationBuilder } from './LocationBuilder';

export default class Location extends DomainResource implements ILocation {
  // Resource Attributes
  resourceType = 'Location';

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

  static builder(): ILocationBuilder {
    return new LocationBuilder();
  }

  static get resourceType(): string {
    return 'Location';
  }

  constructor(args?: ILocation) {
    super();
    Object.assign(this, args);
  }
}
