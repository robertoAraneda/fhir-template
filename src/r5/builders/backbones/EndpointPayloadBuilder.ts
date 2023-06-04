import { EndpointPayload } from '../../interfaces/backbones';
import { CodeableConcept } from '../../interfaces/datatypes';
import { Element, Buildable, Serializable } from '../../interfaces/base';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export class EndpointPayloadBuilder
  extends BackboneElementBuilder<EndpointPayloadBuilder>
  implements Buildable<EndpointPayload>, Serializable
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
