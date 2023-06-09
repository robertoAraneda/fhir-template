import { ICodeableConcept } from '../../interfaces/datatypes';
import { EndpointPayloadBuilder as Builder } from '../../builders/backbones/EndpointPayloadBuilder';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';
import { IBuildable, ISerializable } from '../../interfaces/base';
import { IEndpointPayload } from '../../interfaces/backbones';

export interface EndpointPayloadBuilder
  extends ISerializable,
    IBuildable<IEndpointPayload>,
    BackboneElementBuilder<EndpointPayloadBuilder> {
  addEndpointPayloadParamExtension(param: 'mimeType', extension: Element): Builder;
  addType(type: ICodeableConcept): Builder;
  setMultipleType(type: ICodeableConcept[]): Builder;
  addMimeType(mimeType: string): Builder;
  setMultipleMimeType(mimeType: string[]): Builder;
}
