import { IEndpointPayload } from '../../interfaces/backbones';
import { ICodeableConcept, IExtension } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export class EndpointPayload implements IEndpointPayload {
  // Element Properties
  id?: string;
  extension?: IExtension[];

  // BackboneElement Properties
  modifierExtension?: IExtension[];

  mimeType?: string[];
  _mimeType?: IElement[];
  type?: ICodeableConcept[];

  constructor(args?: IEndpointPayload) {
    Object.assign(this, args);
  }
}
