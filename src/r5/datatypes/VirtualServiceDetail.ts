import { Element } from './Element';
import { Coding } from './Coding';
import { ExtendedContactDetail } from './ExtendedContactDetail';
import { ContactPoint } from './ContactPoint';

export class VirtualServiceDetail extends Element {
  channelType: Coding[];
  addressUri: string;
  addressString: string;
  addressContactPoint: ContactPoint;
  addressExtendedContactDetail: ExtendedContactDetail;
  additionalInfo: string[];
  maxParticipants: number;
  sessionKey: string;

  constructor(args?: Partial<VirtualServiceDetail>) {
    super();
    Object.assign(this, args);
  }
}
