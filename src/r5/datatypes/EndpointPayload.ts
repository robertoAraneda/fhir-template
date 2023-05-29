import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

export class EndpointPayload extends BackboneElement {
  type?: CodeableConcept[];
  mimeType?: string[];
}
