import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../datatypes/CodeableConcept';
import { Element } from '../base/Element';

export interface EndpointPayload extends BackboneElement {
  type?: CodeableConcept[];
  mimeType?: string[];
  _mimeType?: Element;
}
