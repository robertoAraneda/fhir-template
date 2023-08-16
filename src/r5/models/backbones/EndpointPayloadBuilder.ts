import { ICodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder, IBackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IElement } from '../../interfaces/base';
import { EndpointPayload } from './index';
import { IBuildable } from '../../../globals/interfaces';
import { IEndpointPayload } from '../../interfaces/backbones';

interface IEndpointPayloadBuilder extends IBuildable<EndpointPayload>, IBackboneElementBuilder<EndpointPayloadBuilder> {
  addParamExtension(param: 'mimeType', extension: Element[]): this;

  addType(type: ICodeableConcept): this;

  setMultipleType(type: ICodeableConcept[]): this;

  addMimeType(mimeType: string): this;

  setMultipleMimeType(mimeType: string[]): this;
}

export default class EndpointPayloadBuilder
  extends BackboneElementBuilder<EndpointPayloadBuilder>
  implements IEndpointPayloadBuilder
{
  private readonly endpointPayload: IEndpointPayload;

  constructor() {
    super();
    this.endpointPayload = {} as IEndpointPayload;
  }

  public addParamExtension(param: 'mimeType', extension: IElement[]): this {
    this.endpointPayload[`_${param}`] = extension;

    return this;
  }

  public setMultipleType(type: ICodeableConcept[]): this {
    this.endpointPayload.type = type;
    return this;
  }

  public setMultipleMimeType(mimeType: string[]): this {
    this.endpointPayload.mimeType = mimeType;
    return this;
  }

  public addType(type: ICodeableConcept): this {
    this.endpointPayload.type = this.endpointPayload.type || [];
    this.endpointPayload.type.push(type);
    return this;
  }

  public addMimeType(mimeType: string): this {
    this.endpointPayload.mimeType = this.endpointPayload.mimeType || [];
    this.endpointPayload.mimeType.push(mimeType);
    return this;
  }

  build(): EndpointPayload {
    Object.assign(this.endpointPayload, { ...super.entity() });
    return new EndpointPayload(this.endpointPayload).toJson();
  }
}
