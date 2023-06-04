import { EndpointPayload } from '../../interfaces/backbones/EndpointPayload';
import { CodeableConcept } from '../../interfaces/datatypes/CodeableConcept';
import { Element } from '../../interfaces/base/Element';
import { Build } from '../../interfaces/base/Build';
import { Serialize } from '../../interfaces/base/Serialize';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export class EndpointPayloadBuilder
  extends BackboneElementBuilder<EndpointPayloadBuilder>
  implements Build<EndpointPayload>, Serialize
{
  private readonly endpointPayload: EndpointPayload;

  constructor() {
    super();
    this.endpointPayload = {} as EndpointPayload;
  }

  public addEndpointPayloadParamExtension(param: 'mimeType', extension: Element): EndpointPayloadBuilder {
    this.endpointPayload[`_${param}`] = extension;

    return this;
  }

  public setMultipleType(type: CodeableConcept[]): EndpointPayloadBuilder {
    this.endpointPayload.type = type;
    return this;
  }

  public setMultipleMimeType(mimeType: string[]): EndpointPayloadBuilder {
    this.endpointPayload.mimeType = mimeType;
    return this;
  }

  public addType(type: CodeableConcept): EndpointPayloadBuilder {
    this.endpointPayload.type = this.endpointPayload.type || [];
    this.endpointPayload.type.push(type);
    return this;
  }

  public addMimeType(mimeType: string): EndpointPayloadBuilder {
    this.endpointPayload.mimeType = this.endpointPayload.mimeType || [];
    this.endpointPayload.mimeType.push(mimeType);
    return this;
  }

  serialize(): string {
    return JSON.stringify(this.raw(), null, 2);
  }

  build(): EndpointPayload {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): EndpointPayload {
    return {
      ...this.endpointPayload,
      ...super.entity(),
    };
  }
}
