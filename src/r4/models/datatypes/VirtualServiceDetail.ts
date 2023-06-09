import {
  ICoding,
  IContactPoint,
  IExtendedContactDetail,
  IExtension,
  IVirtualServiceDetail,
} from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class VirtualServiceDetail implements IVirtualServiceDetail {
  // Extends from IElement: id, extension
  id?: string;
  extension?: IExtension[];

  // Own properties
  additionalInfo?: string[];
  addressContactPoint?: IContactPoint;
  addressExtendedContactDetail?: IExtendedContactDetail;
  addressString?: string;
  addressUrl?: string;
  channelType?: ICoding[];
  maxParticipants?: number;
  sessionKey?: string;

  // Extensions
  _additionalInfo?: IElement[];
  _addressString?: IElement;
  _addressUrl?: IElement;
  _maxParticipants?: IElement;
  _sessionKey?: IElement;

  constructor(args?: IVirtualServiceDetail) {
    Object.assign(this, args);
  }
}
