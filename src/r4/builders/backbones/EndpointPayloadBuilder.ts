import { IEndpointPayload } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IEndpointPayloadBuilder } from '../interfaces';
import { IElement } from '../../interfaces/base';

export class EndpointPayloadBuilder
  extends BackboneElementBuilder<EndpointPayloadBuilder>
  implements IEndpointPayloadBuilder
{
  private readonly endpointPayload: IEndpointPayload;

  constructor() {
    super();
    this.endpointPayload = {} as IEndpointPayload;
  }

  public addEndpointPayloadParamExtension(param: 'mimeType', extension: IElement): EndpointPayloadBuilder {
    this.endpointPayload[`_${param}`] = extension;

    return this;
  }

  public setMultipleType(type: ICodeableConcept[]): EndpointPayloadBuilder {
    this.endpointPayload.type = type;
    return this;
  }

  public setMultipleMimeType(mimeType: string[]): EndpointPayloadBuilder {
    this.endpointPayload.mimeType = mimeType;
    return this;
  }

  public addType(type: ICodeableConcept): EndpointPayloadBuilder {
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

  build(): IEndpointPayload {
    return JSON.parse(JSON.stringify(this.raw()));
  }

  raw(): IEndpointPayload {
    return {
      ...this.endpointPayload,
      ...super.entity(),
    };
  }
}
