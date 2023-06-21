import { ICoding, IContactPoint, IExtendedContactDetail, IVirtualServiceDetail } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import VirtualServiceDetailBuilder from './VirtualServiceDetailBuilder';

export default class VirtualServiceDetail extends Element implements IVirtualServiceDetail {
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

  static builder(): VirtualServiceDetailBuilder {
    return new VirtualServiceDetailBuilder();
  }

  toJson(): VirtualServiceDetail {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `VirtualServiceDetail${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `VirtualServiceDetail${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IVirtualServiceDetail) {
    super();
    Object.assign(this, args);
  }
}
