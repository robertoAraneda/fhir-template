import { IElement } from '../base';
import { ICoding } from './ICoding';
import { IContactPoint } from './IContactPoint';
import { IExtendedContactDetail } from './IExtendedContactDetail';

export interface IVirtualServiceDetail extends IElement {
  channelType: ICoding[];
  addressUri: string;
  addressString: string;
  addressContactPoint: IContactPoint;
  addressExtendedContactDetail: IExtendedContactDetail;
  additionalInfo: string[];
  maxParticipants: number;
  sessionKey: string;
  _addressUri?: IElement;
  _addressString?: IElement;
  _additionalInfo?: IElement[];
  _maxParticipants?: IElement;
  _sessionKey?: IElement;
}
