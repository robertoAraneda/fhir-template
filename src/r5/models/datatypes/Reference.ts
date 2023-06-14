import { IExtension, IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';

export default class Reference implements IReference {
  // Element attributes
  id: string;
  extension: IExtension[];

  // Reference attributes
  display: string;
  identifier: IIdentifier;
  reference: string;
  type: string;

  // Extensions
  _display: IElement;
  _reference: IElement;
  _type: IElement;

  constructor(args?: IReference) {
    Object.assign(this, args);
  }
}
