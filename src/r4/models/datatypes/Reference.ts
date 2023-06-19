import { IIdentifier, IReference } from '../../interfaces/datatypes';
import { IElement } from '../../interfaces/base';
import Element from '../base/Element';
import { IReferenceBuilder, ReferenceBuilder } from './ReferenceBuilder';

export default class Reference extends Element implements IReference {
  // Reference attributes
  reference: string;
  type: string;
  identifier: IIdentifier;
  display: string;

  // Extensions
  _display: IElement;
  _reference: IElement;
  _type: IElement;

  static builder(): IReferenceBuilder {
    return new ReferenceBuilder();
  }

  constructor(args?: IReference) {
    super();
    Object.assign(this, args);
  }
}
