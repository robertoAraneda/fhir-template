import { IDomainResource, IElement } from '../base';
import {
  IAddress,
  IAvailability,
  ICodeableConcept,
  ICoding,
  IExtendedContactDetail,
  IIdentifier,
  IReference,
  IVirtualServiceDetail,
} from '../datatypes';
import { LocationModeEnum, LocationStatusEnum } from '../../enums';
import { LocationModeType, LocationStatusType } from '../../types';
import { ILocationPosition } from '../backbones';

export interface ILocation extends IDomainResource {
  resourceType: 'Location';
  identifier?: IIdentifier[];
  status?: LocationStatusEnum | LocationStatusType;
  operationalStatus?: ICoding;
  name?: string;
  alias?: string[];
  description?: string;
  mode?: LocationModeEnum | LocationModeType;
  type?: ICodeableConcept[];
  contact?: IExtendedContactDetail[];
  address?: IAddress;
  form?: ICodeableConcept;
  position?: ILocationPosition;
  managingOrganization?: IReference;
  partOf?: IReference;
  characteristic?: ICodeableConcept[];
  hoursOfOperation?: IAvailability[];
  virtualService?: IVirtualServiceDetail[];
  endpoint?: IReference[];

  _status?: IElement;
  _name?: IElement;
  _alias?: IElement[];
  _description?: IElement;
  _mode?: IElement;
}
