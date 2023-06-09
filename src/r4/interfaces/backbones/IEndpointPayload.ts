import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept } from '../datatypes';

export interface IEndpointPayload extends IBackboneElement {
  type?: ICodeableConcept[];
  mimeType?: string[];
  _mimeType?: IElement;
}
