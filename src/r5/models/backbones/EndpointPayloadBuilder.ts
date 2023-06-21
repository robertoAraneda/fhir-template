import { ICodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { EndpointPayload } from './index';
import { IBackboneElementBuilder } from '../../../r4/models/base/BackboneElementBuilder';
import { IBuildable } from '../../../globals/interfaces';

interface IEndpointPayloadBuilder extends IBuildable<EndpointPayload>, IBackboneElementBuilder<EndpointPayloadBuilder> {
  addParamExtension(param: 'mimeType', extension: Element[]): EndpointPayloadBuilder;

  addType(type: ICodeableConcept): EndpointPayloadBuilder;

  setMultipleType(type: ICodeableConcept[]): EndpointPayloadBuilder;

  addMimeType(mimeType: string): EndpointPayloadBuilder;

  setMultipleMimeType(mimeType: string[]): EndpointPayloadBuilder;
}

export default class EndpointPayloadBuilder
  extends BackboneElementBuilder<EndpointPayloadBuilder>
  implements IEndpointPayloadBuilder
{
  private readonly endpointPayload: EndpointPayload;

  constructor() {
    super();
    this.endpointPayload = new EndpointPayload();
  }

  public addParamExtension(param: 'mimeType', extension: IElement[]): EndpointPayloadBuilder {
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

  build(): EndpointPayload {
    Object.assign(this.endpointPayload, { ...super.entity() });
    return this.endpointPayload.toJson();
  }
}
