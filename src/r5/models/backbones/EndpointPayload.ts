import { IEndpointPayload } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import BackboneElement from '../base/BackboneElement';
import EndpointPayloadBuilder from './EndpointPayloadBuilder';

export default class EndpointPayload extends BackboneElement implements IEndpointPayload {
  mimeType?: string[];
  _mimeType?: IElement[];
  type?: ICodeableConcept[];

  static builder(): EndpointPayloadBuilder {
    return new EndpointPayloadBuilder();
  }

  toJson(): EndpointPayload {
    return JSON.parse(JSON.stringify(this));
  }

  toString(): string {
    return `EndpointPayload${JSON.stringify(this.toJson())}`;
  }

  toPrettyString(): string {
    return `EndpointPayload${JSON.stringify(this.toJson(), null, 2)}`;
  }

  constructor(args?: IEndpointPayload) {
    super();
    Object.assign(this, args);
  }
}
