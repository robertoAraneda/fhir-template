import { Element } from '../base/Element';
import { Coding } from './Coding';
import { ContactPoint } from './ContactPoint';
import { ExtendedContactDetail } from './ExtendedContactDetail';

export interface VirtualServiceDetail extends Element {
  channelType: Coding[];
  addressUri: string;
  addressString: string;
  addressContactPoint: ContactPoint;
  addressExtendedContactDetail: ExtendedContactDetail;
  additionalInfo: string[];
  maxParticipants: number;
  sessionKey: string;
  _addressUri?: Element;
  _addressString?: Element;
  _additionalInfo?: Element[];
  _maxParticipants?: Element;
  _sessionKey?: Element;
}
