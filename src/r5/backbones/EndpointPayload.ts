import { BackboneElement } from '../datatypes/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';

export class EndpointPayload extends BackboneElement {
  type?: CodeableConcept[];
  mimeType?: string[];
}
