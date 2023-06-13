import { IEndpointPayload } from '../../interfaces/backbones';
import { ICodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, IElement, ISerializable } from '../../interfaces/base';
import { EndpointPayload } from '../../models/backbones';

interface IEndpointPayloadBuilder extends ISerializable, IBuildable<IEndpointPayload> {
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
    this.endpointPayload = new EndpointPayload();
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
