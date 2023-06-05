import { Buildable, Element, ISerializable } from '../../interfaces/base';
import { EndpointPayloadBuilder as Builder } from '../../builders/backbones/EndpointPayloadBuilder';
import { EndpointPayload } from '../../interfaces/backbones';
import { CodeableConcept } from '../../interfaces/datatypes';
import { BackboneElementBuilder } from '../base/BackboneElementBuilder';

export interface EndpointPayloadBuilder
  extends ISerializable,
    Buildable<EndpointPayload>,
    BackboneElementBuilder<EndpointPayloadBuilder> {
  addEndpointPayloadParamExtension(param: 'mimeType', extension: Element): Builder;
  addType(type: CodeableConcept): Builder;
  setMultipleType(type: CodeableConcept[]): Builder;
  addMimeType(mimeType: string): Builder;
  setMultipleMimeType(mimeType: string[]): Builder;
}
